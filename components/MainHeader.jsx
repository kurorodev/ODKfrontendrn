import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6587d083d8e3e1ee1c639bd95b49d5afd55774553058898c87fd90fe0481926d?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
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
    width: 80,
    height: 80,
  },
  greetingContainer: {
    alignSelf: 'center',
    marginTop: 16,
  },
  greeting: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;