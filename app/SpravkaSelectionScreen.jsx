import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SpravkaItem from '../components/SpravkaItem';

const spravkaItems = [
  { title: '2-НДФЛ (о выплаченном доходе)', id: '2ndfl' },
  { title: 'СТД-Р (справка с места работы)', id: 'stdr' },
  { title: 'Справка стажа работы', id: 'workExperience' },
  { title: 'Трудовой договор', id: 'laborContract' },
  { title: 'Справка о среднем заработке за последние три месяца', id: 'averageSalary' },
];

function SpravkaSelectionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Выберите справку</Text>
      </View>
      {spravkaItems.map((item) => (
        <SpravkaItem key={item.id} title={item.title} style={styles.item}/>
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

export default SpravkaSelectionScreen;