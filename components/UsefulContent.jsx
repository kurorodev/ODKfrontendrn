import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const UsefulContent = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.placeholder} />
      <View style={styles.mainContent}>
        <View style={styles.contentBox} />
        <Text style={styles.contentTitle}>Может быть полезно</Text>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/65fdb1995dc140d08a5c47f604771c3e/ff69f7b1dd2a5784c5a3f966851f6c4a11454191e23ac7ee67e1efee6ff009ce?apiKey=65fdb1995dc140d08a5c47f604771c3e&" }}
          style={styles.contentImage}
          resizeMode="contain"
          accessibilityLabel="Useful content"
        />
      </View>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  placeholder: {
    borderRadius: 30,
    width: 17,
    height: 290,
    marginTop: 16,
  },
  mainContent: {
    alignItems: 'center',
    flex: 1,
  },
  contentBox: {
    borderRadius: 40,
    height: 320,
    width: '100%',
  },
  contentTitle: {
    marginTop: 22,
    fontSize: 11,
    color: '#7A9AC3',
  },
  contentImage: {
    marginTop: 8,
    width: 109,
    height: 14,
  },
});

export default UsefulContent;
