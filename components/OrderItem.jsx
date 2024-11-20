import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function OrderItem({ title, icon }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={typeof icon === 'string' ? { uri: icon } : icon} // Поддержка локальных и удаленных иконок
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 34,
    marginBottom: 18,
    backgroundColor: '#E9F2FF',
  },
  contentContainer: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    fontWeight: '900',
    color: 'rgba(50, 67, 92, 1)',
    letterSpacing: 0.02,
    textAlign: 'left',
  },
  iconContainer: {
    alignItems: 'center', // Центрируем иконку по горизонтали
    justifyContent: 'center', // Центрируем иконку по вертикали
  },
  icon: {
    width: width * 0.1, // Размер иконки в зависимости от ширины экрана
    height: width * 0.2 * (0.57), // Высота с учетом соотношения сторон
  },
});

export default OrderItem;