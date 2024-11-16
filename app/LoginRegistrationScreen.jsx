import React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LoginRegistrationScreen = () => {
  return (
    <LinearGradient colors={['rgba(21, 38, 65, 1)', 'rgba(255, 255, 255, 1)']} style={styles.container_grad}>
    <ScrollView>
    <View style={styles.container}>
      <Logo />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Войти/Регистрация</Text>
        <InputField label="Логин" placeholder="+7..." />
        <InputField label="Пароль" placeholder="........" secureTextEntry />
        <Button title="Войти" onPress={() => router.push('/MainMenu')} />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.companyName}>ОДК Кузнецов</Text>
    </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  container_grad: {
    flex: 1,
  },
  formContainer: {
    width: '100%',
    maxWidth: 480,
    marginTop: 29,
    padding: 32,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    color: 'rgba(56, 74, 102, 1)',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 30,
  },
  forgotPassword: {
    color: 'rgba(56, 74, 102, 1)',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 20,
    textAlign: 'center',
  },
  companyName: {
    color: 'rgba(21, 38, 64, 1)',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 40,
  },
});

export default LoginRegistrationScreen;
