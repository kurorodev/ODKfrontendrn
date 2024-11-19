import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Redirect, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_PUBLIC_TCPIP } from '@env';


const ipconfig = process.env.TCP_IP;

const WelcomeScreen = () => {

  const checkToken = async () => {
    try {
        // Получаем токен из AsyncStorage
        const token = await AsyncStorage.getItem('jwtToken');

        // Отправляем запрос с токеном в заголовке
        const response = await fetch(`http://${EXPO_PUBLIC_TCPIP}:8000/verify-token`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок
            },
        });

        const data = await response.json();

        if (response.ok) {
            router.push("(tabs)/MainScreen");
            console.log("Response Data:", data);
            // Обработка успешного ответа
        } else {
            console.error(data.detail);
        }
    } catch (error) {
        console.error('Error during request:', error);
    }
};
    
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      checkToken();
      router.push('/LoginRegistrationScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
            <Text style={styles.welcomeText}>Создаем движение, конструируем будущее!</Text>
          </View>
          <View style={styles.companyNameContainer}>
            <Text style={styles.companyName}>ОДК Кузнецов</Text>
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
