import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SpravkaItem from '../components/SpravkaItem';
import SpravkaInformation from './SpravkaInformation';
import { Redirect, router } from 'expo-router';
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from '@react-navigation/native'

const spravkaItems = [
  { title: '2-НДФЛ (о выплаченном доходе)', id: '2ndfl', screen: "SpravkaInformation"},
  { title: 'СТД-Р (справка с места работы)', id: 'stdr' },
  { title: 'Справка стажа работы', id: 'workExperience' },
  { title: 'Трудовой договор', id: 'laborContract' },
  { title: 'Справка о среднем заработке за последниe три месяца', id: 'averageSalary' },
];

const SpravkaSelectionScreen = () => {

  const SpravkaClick = (id) => {
    console.log(id)
    router.setParams
    router.push({
      pathname: 'SpravkaInformation', // путь к экрану
      params: { id: id }, // параметры
    });
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Выберите справку</Text>
      </View>
      {spravkaItems.map((item) => (
          <SpravkaItem key={item.id} title={item.title} style={styles.item} screen={"SpravkaInformation"} id={item.id} onClick={SpravkaClick}/>
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