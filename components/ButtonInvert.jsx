import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonInvert = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  buttonText: {
    color: '#32435C',
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '80',
  },
});

export default ButtonInvert;