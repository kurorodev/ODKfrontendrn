import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

// Get width and height from the window dimensions
const { width, height } = Dimensions.get('window');

function InfoCard({ title, icon, backgroundColor, textColor, onPress }) {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat.ttf'), // Укажите путь к вашему шрифту
  });

  if (!fontsLoaded) {
    return null; // Или индикатор загрузки
  }

  return (
    <TouchableOpacity style={[styles.cardContainer, { backgroundColor }]} onPress={onPress} accessibilityRole="button">
      <Text style={[styles.cardTitle, { color: textColor }]}>{title}</Text>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: icon }}
          style={styles.cardIcon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    marginTop: 24,
    width: '100%',
    paddingHorizontal: width * 0.05, // Use percentage of screen width
    paddingTop: height * 0.01, // Небольшой адаптивный отступ сверху (1% от высоты экрана)
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: width * 0.04, // Font size as a percentage of screen width
    fontFamily: 'Montserrat', // Используем загруженный шрифт здесь
    fontWeight: '900',
    letterSpacing: 0.01,
    alignSelf: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: width * 0.1, // Gap between icons as a percentage of screen width
  },
  cardIcon: {
    width: width * 0.2, // Icon width as a percentage of screen width
    aspectRatio: 1.38,
  },
});

export default InfoCard;