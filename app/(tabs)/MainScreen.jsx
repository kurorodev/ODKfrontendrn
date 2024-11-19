import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/MainHeader'; // Ensure this component does not render strings directly
import EventBanner from '../../components/EventBanner'; // Ensure this component does not render strings directly
import PostSlider from '../../components/PostSlider';

const MainScreen = () => {
  return (
    <LinearGradient colors={['#162641', '#6081B2', '#B9D7F4', '#FFFFFF']}
      locations={[0.06, 0.28, 0.62, 0.92]}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header />
        <EventBanner />
        <PostSlider /> 
        <Text>Static Text Below Post Slider</Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 65,
    paddingBottom: 107,
    maxWidth: 480,
    width: '100%',
  },
});

export default MainScreen;