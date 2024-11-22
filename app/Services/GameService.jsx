import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Dimensions, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const WS_URL = 'ws://192.168.1.7:8001'; // Замените на ваш адрес сервера

const GameService = () => {
  const [clickCount, setClickCount] = useState(0);
  const [websocket, setWebSocket] = useState(null);
  const [topUsers, setTopUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (websocket) {
        websocket.close();
      }
    };
  }, []);

  const connectWebSocket = async () => {
    const token = await AsyncStorage.getItem('jwtToken');
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
      const response = await fetch('http://192.168.1.7:8001/top-users/?limit=5');
      const data = await response.json();
      setTopUsers(data);
      setModalVisible(true);
    } catch (error) {
      console.error('Error fetching top users:', error);
    }
  };

  const renderTopUser = ({ item }) => (
    <View style={styles.userRow}>
      <Text style={styles.userName}>{item.username}</Text>
      <Text style={styles.userCoins}>{item.coins}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ODKombat</Text>

      <View style={styles.headerContainer}>
        <Image
          resizeMode="contain"
          source={require('../../assets/free-icon-dollar-1490853 (1) 2.png')}
          style={styles.logoImage}
        />
        <Text style={styles.count}>{clickCount}</Text>
      </View>

      {/* Clickable area with coin logo covering the entire screen */}
      <TouchableOpacity onPress={handleClick} style={styles.clickableArea}>
        <Image
          source={require('../../assets/free-icon-dollar-1490853 (1) 2.png')}
          style={styles.fullScreenLogoImage}
        />
      </TouchableOpacity>

      {/* Button with margin for spacing from the count */}
      <Button title="Показать топ пользователей" onPress={fetchTopUsers} style={styles.button} />

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
              renderItem={renderTopUser}
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF8DB',
  },
  title: {
    fontSize: 24,
    color: '#F68E00',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold', // Use custom bold font
  },
  count: {
    fontSize: 20,
    marginLeft: width * 0.02,
    fontFamily: 'Montserrat-Regular', // Use custom regular font
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0B1',
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Montserrat', // Use custom regular font
  },
  userCoins: {
    fontSize: 18,
    fontFamily: 'Montserrat', // Use custom regular font
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    alignItems: 'center',
    backgroundColor: '#FFF0B1',
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
    fontFamily: 'Montserrat', // Use custom bold font
  },

   // Styles for the clickable area and full-screen logo
   clickableArea: {
     position: 'absolute', // Position it absolutely to cover the entire screen
     top: height * -0.2, // Adjust this value to position as needed
     left: 0,
     right: 0,
     bottom: height * -0.2, // Leave space for the button below
     justifyContent: 'center', // Center vertically
     alignItems: 'center', // Center horizontally
   },
   fullScreenLogoImage: {
     width: width * 0.5, // Adjust size as needed for visibility
     height: width * 0.5, // Maintain aspect ratio
   },
   button:{
     marginTop : height * 0.15 , // Adjust this value to position the button below the clickable area correctly
   }
});

export default GameService;