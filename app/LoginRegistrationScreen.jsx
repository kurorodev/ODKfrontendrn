import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../components/Logo';
import InputField from '../components/InputField';
import Button from '../components/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_PUBLIC_TCPIP } from '@env';


const ipconfig = process.env.TCP_IP;

const LoginRegistrationScreen = () => {

  const [username, setUsername] = useState('jopa');
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');

   const handleLogin = async () => {
    try {
     
      var details = {
        'username': username,
        'password': password,
        'grant_type': 'password'
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
     const response = await fetch(`http://${EXPO_PUBLIC_TCPIP}:8000/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    })

      console.log(username);
      console.log(password)

      const data = await response.json()

      if (response.ok) {
        // Assuming the token is returned in data.token
        // const token = data.token;
        // Store the token in headers for future requests
        // You can use AsyncStorage or any state management solution
        const token = data.token
        await AsyncStorage.setItem('jwtToken', data.access_token);

        // console.log('Data is:', data);
        // console.log("esseba")
        router.push('(tabs)/MainScreen');
      } else {
        // Handle error case
        setErrorMessage('Пароль или логин неверный'); // "Incorrect username or password"
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Произошла ошибка при входе'); // "An error occurred during login"
    }
   };

  // const fetchItem = async (itemId) => {
  //   axios.get('http://10.0.2.2:8000/items/1', {
  //     //example with bearer token
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers':'*'
  //     }
  //  })
   
  //  .then(function (response) {
  //     console.log(response.text());
  //  })
  //  .catch(function (error) {
  //      console.log(error);
  //  })};
   


  return (
    <LinearGradient colors={['rgba(21, 38, 65, 1)', 'rgba(255, 255, 255, 1)']} style={styles.container_grad}>
    <ScrollView>
    <View style={styles.container}>
      <Logo />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Войти/Регистрация</Text>
        <TextInput label="Логин" placeholder="+7..." value={username} onChangeText={setUsername}/>
        <TextInput label="Пароль" placeholder="........" secureTextEntry value={password} onChangeText={setPassword}/>
        <Button title="Войти" onPress={handleLogin} /> 
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.companyName}>ОДК Кузнецов</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginRegistrationScreen;
