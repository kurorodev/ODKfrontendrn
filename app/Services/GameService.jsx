import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WS_URL = 'ws://192.168.1.7:8001'; // Замените на ваш адрес сервера

const GameService = () => {
  const [clickCount, setClickCount] = useState(0);
  const [websocket, setWebSocket] = useState(null);
  const [topUsers, setTopUsers] = useState([]); // Состояние для топа пользователей
  const [modalVisible, setModalVisible] = useState(false); // Состояние для управления модальным окном

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  const connectWebSocket = async () => {
    const token = await AsyncStorage.getItem('jwtToken'); // Получаем токен, если он нужен
    const wsWithToken = `${WS_URL}/click/?token=${token}`;

    const newWebSocket = new WebSocket(wsWithToken);

    newWebSocket.onopen = () => {
      console.log('WebSocket connected');
    };

    newWebSocket.onmessage = (event) => {
      console.log('Received data:', event.data);
      try {
        const data = JSON.parse(event.data);
        if (data.clicks !== undefined) {
          setClickCount(data.clicks);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    newWebSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    setWebSocket(newWebSocket);
  };

  const handleClick = () => {
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(JSON.stringify({ event: 'click_event' }));
    }
  };

  const fetchTopUsers = async () => {
    try {
      const response = await fetch('http://192.168.1.7:8001/top-users/?limit=5'); // Замените на ваш адрес сервера
      const data = await response.json();
      setTopUsers(data); // Предполагается, что сервер возвращает массив пользователей
      setModalVisible(true); // Открываем модальное окно
    } catch (error) {
      console.error('Error fetching top users:', error);
    }
  };

  const renderTopUser  = ({ item }) => (
    <View style={styles.userRow}>
      <Text style={styles.userName}>{item.username}</Text>
      <Text style={styles.userCoins}>{item.coins}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Кликер</Text>
      <Text style={styles.count}>Количество кликов: {clickCount}</Text>
      <Button title="Кликни меня!" onPress={handleClick} />
      <Button title="Показать топ пользователей" onPress={fetchTopUsers} />

      {/* Модальное окно для отображения топа пользователей */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Топ пользователей</Text>
            <FlatList
              data={topUsers}
              renderItem={renderTopUser }
              keyExtractor={(item) => item.username}
            />
            <Button title="Закрыть" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    count: {
      fontSize: 20 ,
      marginVertical: 10,
    },
    userRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    userName: {
      fontSize: 18,
    },
    userCoins: {
      fontSize: 18,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  
  export default GameService;
  