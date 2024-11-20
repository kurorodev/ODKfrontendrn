import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const categories = [
  { id: 1, title: 'Заказать справку' },
  { id: 2, title: 'Обучение' },
  { id: 3, title: '3D-тур' },
  { id: 4, title: 'Навигатор' },
  { id: 5, title: 'Инфо' },
  { id: 6, title: 'Сервисы' }
];

function CategoryButton({ title, icon, style, onPress }) {

  const [fontsLoaded] = useFonts({
    'Montserrat': require('../assets/fonts/Montserrat.ttf'), // Укажите путь к вашему шрифту
  });

  if (!fontsLoaded) {
    return null; // Или индикатор загрузки
  }

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
    >
      <Image
        source={{ uri: icon }}
        style={styles.icon}
        resizeMode="contain"
        accessibilityLabel={`Иконка ${title}`}
      />
      <Text style={[styles.title, (title === 'Заказать справку' || title === 'Обучение') && { color: '#152641' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(21, 38, 65, 0.9)',
    height: 170,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)', // Цвет по умолчанию
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Montserrat'
  },
});

export default CategoryButton;