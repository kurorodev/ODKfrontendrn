import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_PUBLIC_TCPIP } from '@env';


const handleGigachat = async (userInput, setMessages) => {
  try {
    // Получаем токен из AsyncStorage
    const token = await AsyncStorage.getItem('jwtToken');

    // Отправляем запрос с токеном в заголовке
    const response = await fetch(`http://192.168.1.3:8000/gigachat/?user_input=` + encodeURIComponent(userInput), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок
        'Accept': 'application/json' // Указываем, что ожидаем JSON в ответе
      },
      body: JSON.stringify({}) // Тело запроса может быть пустым или содержать данные, если требуется
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Response Data:", data);
      // Добавляем ответ от ИИ в сообщения
      setMessages(prevMessages => [...prevMessages, { text: data.response, isAI: true }]); // Предполагается, что ответ от API находится в data.response
    } else {
      console.error(data.detail);
    }
  } catch (error) {
    console.error('Error during request:', error);
  }
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      // Добавляем пользовательское сообщение в массив сообщений
      setMessages(prevMessages => [...prevMessages, { text: inputText, isAI: false }]);
      
      // Вызываем функцию для отправки сообщения ИИ
      handleGigachat(inputText, setMessages);

      setInputText(''); // Очистить поле ввода после отправки
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GIGACHAT</Text>
      </View>
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.isAI ? styles.aiMessageBubble : styles.userMessageBubble}>
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Напишите сообщение..."
          placeholderTextColor="#999"
          multiline={true}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingTop: 8,
    paddingBottom: 26,
    fontFamily: 'Montserrat, sans-serif',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E2F0FF",
  },
  headerText: {
    fontSize: 36,
    color: '#0F1A2D',
    fontWeight: '900',
    lineHeight: 72,
  },
  messageContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  userMessageBubble: {
    backgroundColor: '#7FA4DF',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    alignSelf: 'flex-end', // Выравнивание сообщений пользователя вправо
  },
  aiMessageBubble: {
    backgroundColor: '#B9D6F4', // Цвет для сообщений ИИ
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    alignSelf: 'flex-start', // Выравнивание сообщений ИИ влево
  },
  messageText: {
    color: '#0F1A2D',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
    backgroundColor: "#B9D6F4"
  },
  sendButton: {
    backgroundColor: '#0F1A2D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
