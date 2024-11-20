import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import OrderItem from '../components/OrderItem';

const orderItems = [
  { title: 'Повышение квалификации', id: 'qualify' },
  { title: 'Запись в поликилинику', id: 'medic' },
  { title: 'Заявка на онлайн обучение', id: 'education' },
  { title: 'Курсы по русскому языку', id: 'russian' },
];

function Orders() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Заявки</Text>
      </View>
      {orderItems.map((item) => (
        <OrderItem key={item.id} title={item.title} style={styles.item}/>
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
  item: {
    backgroundColor: '#E9F2FF'
  }
});

export default Orders;