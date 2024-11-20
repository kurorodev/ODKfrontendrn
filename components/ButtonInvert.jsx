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
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 45,
  },
  buttonText: {
    color: '#32435C',
    fontSize: 14,
    fontWeight: '800',
  },
});

export default ButtonInvert;