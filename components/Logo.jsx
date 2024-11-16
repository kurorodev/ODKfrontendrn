import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/24821de26fccd578dca6024b707533a43361098e7cd23d697e6b254d8832c58d?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e" }}
      style={styles.logo}
      resizeMode="contain"
      accessibilityLabel="Company Logo"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 118,
    aspectRatio: 0.67,
    borderRadius: 20,
  },
});

export default Logo;
