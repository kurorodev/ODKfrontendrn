import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

function CourseCard({ title, imageUri }) {
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.courseImage} />
        <Image resizeMode="contain" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd090dc6bfaea35a333a0838baaea63dd9164c5466bd354203f4506656ae23eb?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }} style={styles.arrowImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    display: 'flex',
    marginTop: 32,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 13,
    alignItems: 'stretch',
    gap: 20,
    backgroundColor: '#E9F2FF',
  },
  titleContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    color: 'rgba(50, 67, 92, 1)',
    fontSize: 16,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '900',
    letterSpacing: 0.02,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 15,
    flexDirection: 'row',
  },
  courseImage: {
    position: 'relative',
    display: 'flex',
    width: 132,
    flexShrink: 0,
    maxWidth: '100%',
    aspectRatio: 1.23,
  },
  arrowImage: {
    position: 'relative',
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 8,
    flexShrink: 0,
    aspectRatio: 0.57,
  },
});

export default CourseCard;