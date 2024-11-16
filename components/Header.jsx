import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/f440d27675ebd5b33a4859f9e528c40bd5131240ff4d91e20752613e6c19fe6b?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e" }}
        style={styles.plusIcon}
        resizeMode="contain"
      />
      <View style={styles.archiveContainer}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b58328eb78b14145c798045bf17ca309bea5b1a83eee365326aa73bac5bd03e6?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e" }}
          style={styles.archiveIcon}
          resizeMode="contain"
        />
        <Text style={styles.archiveText}>Архив</Text>
      </View>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/142383fe7443983c901fa363cd8a291519fc60a9067d45b0cb8e0c34ce668d36?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e" }}
        style={styles.logoIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 20,
  },
  plusIcon: {
    width: 30,
    aspectRatio: 1,
  },
  archiveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  archiveIcon: {
    width: 26,
    aspectRatio: 1,
  },
  archiveText: {
    fontSize: 20,
    color: 'rgba(22, 39, 65, 1)',
    fontWeight: '700',
  },
  logoIcon: {
    width: 59,
    aspectRatio: 0.92,
    borderRadius: 20,
  },
});

export default Header;
