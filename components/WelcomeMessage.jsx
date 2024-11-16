import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WelcomeMessage = ({ name }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeText}>Здравствуйте! {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
    marginTop: -8,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '700',
  },
});

export default WelcomeMessage;
