import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const UsefulSection = () => {
  return (
    <View style={styles.usefulContainer}>
      <View style={styles.leftBar} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <View style={styles.textWrapper}>
            <View style={styles.placeholder} />
            <View style={styles.textContent}>
              <Text style={styles.usefulText}>Может быть полезно</Text>
            </View>
          </View>
          <View style={styles.rightBar} />
        </View>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff69f7b1dd2a5784c5a3f966851f6c4a11454191e23ac7ee67e1efee6ff009ce?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
          style={styles.usefulImage}
          accessible={true}
          accessibilityLabel="Useful information image"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  usefulContainer: {
    display: 'flex',
    marginTop: 24,
    width: '100%',
    alignItems: 'stretch',
    gap: 32,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 11,
    color: 'rgba(122, 154, 195, 1)',
    fontWeight: '400',
  },
  leftBar: {
    borderRadius: 40,
    display: 'flex',
    width: 26,
    flexShrink: 0,
    height: 320,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 32,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  placeholder: {
    borderRadius: 40,
    display: 'flex',
    flexShrink: 0,
    height: 320,
  },
  textContent: {
    alignSelf: 'center',
    marginTop: 22,
  },
  usefulText: {
    fontSize: 11,
    color: 'rgba(122, 154, 195, 1)',
    fontWeight: '400',
  },
  rightBar: {
    borderRadius: 40,
    display: 'flex',
    width: 20,
    flexShrink: 0,
    height: 320,
  },
  usefulImage: {
    borderRadius: 0,
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    marginTop: 8,
    width: 109,
    maxWidth: '100%',
    aspectRatio: 7.81,
  },
});

export default UsefulSection;