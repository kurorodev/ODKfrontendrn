import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { EXPO_PUBLIC_TCPIP } from '@env';

SplashScreen.preventAutoHideAsync();

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat.ttf'), // Укажите путь к вашему шрифту
  });

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken');
      const response = await fetch(`http://192.168.1.7:8000/verify-token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        router.push("(tabs)/MainScreen");
        console.log("Response Data:", data);
      } else {
        console.error(data.detail);
      }
    } catch (error) {
      console.error('Error during request:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkToken();
      router.push('/LoginRegistrationScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  // Проверка состояния загрузки шрифтов
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#000033', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.content}>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/65fdb1995dc140d08a5c47f604771c3e/63a1dd7431ac0341fb6a89ad50cfdaabd7d335e9df13cfea17a6c6586faa2fad?apiKey=65fdb1995dc140d08a5c47f604771c3e&" }}
            style={styles.logo}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel="ODK Kuznetov logo"
          />
          <View style={styles.welcomeTextContainer}>
            <Text style={[styles.welcomeText, { fontFamily: 'Montserrat' }]}>
              Создаем движение, конструируем будущее!
            </Text>
          </View>
          <View style={styles.companyNameContainer}>
            <Text style={[styles.companyName, { fontFamily: 'Montserrat' }]}>
              ОДК Кузнецов
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  logo: {
    width: 116,
    aspectRatio: 0.64,
  },
  welcomeTextContainer: {
    alignSelf: 'stretch',
  },
  welcomeText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  companyNameContainer: {
    alignSelf: 'stretch',
  },
  companyName: {
    fontSize: 12,
    color: '#152640',
    textAlign: 'center',
  },
});

export default WelcomeScreen;