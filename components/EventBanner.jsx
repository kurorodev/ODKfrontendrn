import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';

const EventBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/78e01df0bbc2ca171defefb97a8d5c823b09e24c0f5fe821d687bee6fae53733?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
        style={styles.bannerImage}
        accessible={true}
        accessibilityLabel="Event banner image"
      >
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Ждешь корпоратив?</Text>
          <Text style={styles.bannerDescription}>
            Не забудь записать себя в список гостей и своих друзей!
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  bannerImage: {
    position: 'relative',
    display: 'flex',
    aspectRatio: 4,
    marginTop: 47,
    width: 320,
    maxWidth: 320,
    paddingLeft: 21,
    paddingRight: 61,
    paddingTop: 11,
    paddingBottom: 11,
    flexDirection: 'column',
    fontFamily: 'Montserrat, sans-serif',
    color: 'rgba(255, 255, 255, 1)',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    position: 'relative',
    color: "#FFFFFF"
  },
  bannerDescription: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 17,
    position: 'relative',
    color: "#FFFFFF"
  },
});

export default EventBanner;