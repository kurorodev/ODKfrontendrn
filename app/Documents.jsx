import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DocumentItem from '../components/DocumentItem';

const documetsItems = [
  { title: 'Паспорт', id: 'pasport', icon: require('../assets/icons/pasport.png') },
  { title: 'ИНН', id: 'inn' ,icon: require('../assets/icons/inn.png')},
  { title: 'СНИЛС', id: 'snils' ,icon: require('../assets/icons/snils.png')},
  { title: 'Военный билет', id: 'nilet' ,icon: require('../assets/icons/bilet.png')},
  { title: 'Книжка волонтёра', id: 'volontbook' ,icon: require('../assets/icons/medbook.png')},
  { title: 'Договоры', id: 'dogovor' ,icon: require('../assets/icons/dogovor.png')},
];

function Documents() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Документы</Text>
      </View>
      {documetsItems.map((item) => (
        <DocumentItem key={item.id} title={item.title} icon={item.icon} style={styles.item}/>
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