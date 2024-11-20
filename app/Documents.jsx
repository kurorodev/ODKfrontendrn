import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DocumentItem from '../components/DocumentItem';

const documetsItems = [
  { title: 'Паспорт', id: 'pasport' },
  { title: 'ИНН', id: 'inn' },
  { title: 'СНИЛС', id: 'snils' },
  { title: 'Военный билет', id: 'nilet' },
  { title: 'Книжка волонтёра', id: 'volontbook' },
  { title: 'Договоры', id: 'dogovor' },
];

function Documents() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Документы</Text>
      </View>
      {documetsItems.map((item) => (
        <DocumentItem key={item.id} title={item.title} style={styles.item}/>
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

export default Documents;