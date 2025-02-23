import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ServicesItem from '../components/ServicesItem';
import { Redirect, router } from 'expo-router';
import ShopService from './Services/ShopService';

const servicesItem = [
  { title: 'Поликлиника', id: '1', icon: require('../assets/icons/poliklinika.png'), screen: "./Services/ClinicService" },
  { title: 'Питание', id: '2', icon: require('../assets/icons/pitanie.png'), screen: "./Services/FoodService"},
  { title: 'Магазин', id: '3', icon: require('../assets/icons/odezhda.png'), screen: "./Services/ShopService"},
  { title: 'Игра', id: '4', icon: require('../assets/icons/igra.png'), screen: "./Services/GameService"},
];

function Services() {
  const onClick = (path, id) => {
    router.push({
      pathname: path, // путь к экрану
      params: { id: id }, // параметры
    });
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Сервисы</Text>
      </View>
      {servicesItem.map((item, index) => (
        <ServicesItem 
          key={item.id} 
          title={item.title} 
          icon={item.icon} // Используем локальную иконку
          textColor={index === 3 ? '#E9F2FF' : '#162741'}
          backgroundColor={
            index < 1 ? '#E9F2FF' : index < 3 ? '#B9D6F4' : '#162741'
          }
          onPress={() => onClick(item.screen,item.id)} // Обработчик нажатия
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 21,
    paddingTop: 54,
    paddingBottom: 195,
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    marginBottom: 53,
  },
  headerText: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 36,
    fontWeight: '900',
    color: 'rgba(21, 38, 64, 1)',
    letterSpacing: 0.04,
    textAlign: 'center',
  },
});

export default Services;