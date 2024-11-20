import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Header = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat.ttf'), // Укажите путь к вашему шрифту
  });

  if (!fontsLoaded) {
    return null; // Или индикатор загрузки
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={require('../assets/icons/logo_main.png')}
          style={styles.logo}
          accessible={true}
          accessibilityLabel="Company logo"
        />
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Здравствуйте! Иван Морозов</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoContainer: {
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    borderRadius: 20,
    position: 'relative',
    display: 'flex',
    aspectRatio: 1.39,
    width: 150,
    height: 150,
  },
  greetingContainer: {
    alignSelf: 'center',
    marginTop: 16,
  },
  greeting: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontFamily: 'Montserrat', // Используем загруженный шрифт
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;