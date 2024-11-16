import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/HeaderMainMenu';
import WelcomeMessage from '../../components/WelcomeMessage';
import EventReminder from '../../components/EventReminder';
import UsefulContent from '../../components/UsefulContent';
import HeaderMainMenu from '../../components/HeaderMainMenu';

const MainMenu = () => {
  return (
    <LinearGradient
      colors={['#0000FF', '#FFFFFF']}
      style={styles.container}
    >
      <HeaderMainMenu />
      <WelcomeMessage name="Иван Морозов" />
      <EventReminder />
      <UsefulContent />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
    paddingBottom: 107,
    alignItems: 'center',
  },
});

export default MainMenu;
