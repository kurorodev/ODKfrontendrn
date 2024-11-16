import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f63265fc075c1398986b8cede7ac84a5590e59d9cea965584c3e5324b8cc05?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
        style={styles.logoImage}
      />
      <View style={styles.userInfoContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd8acb62a57c6eef890f749c2aa03779513194f07f13ce8e0f1ccd2b13966ad9?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
          style={styles.userAvatar}
        />
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>И.В.Морозов</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 10,
    display: 'flex',
    alignItems: 'flex-start',
    gap: 19,
    backgroundColor: '#E9F2FF',
  },
  logoImage: {
    position: 'relative',
    display: 'flex',
    marginTop: 50,
    width: 125,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 1,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  userAvatar: {
    position: 'relative',
    display: 'flex',
    width: 75,
    aspectRatio: 0.93,
  },
  userNameContainer: {
    borderRadius: 20,
    marginTop: 9,
    paddingHorizontal: 67,
    paddingVertical: 12,
    backgroundColor: '#E9F2FF',
  },
  userName: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    color: 'rgba(21, 38, 64, 1)',
    fontWeight: '600',
    letterSpacing: 0.02,
  },
});

export default Header;