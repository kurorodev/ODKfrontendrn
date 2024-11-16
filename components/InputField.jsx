import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({ label, placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="rgba(185, 214, 244, 1)"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 28,
  },
  label: {
    color: 'rgba(56, 74, 102, 1)',
    fontSize: 9,
    fontWeight: '700',
    marginBottom: 10,
  },
  input: {
    color: 'rgba(185, 214, 244, 1)',
    fontSize: 16,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(185, 214, 244, 1)',
    paddingVertical: 5,
  },
});

export default InputField;
