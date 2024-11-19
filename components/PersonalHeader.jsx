import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_PUBLIC_TCPIP } from '@env';


function Header() {
  const [userInfo, setUserInfo] = useState(null); // Состояние для хранения информации о пользователе

  const getInformation = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken'); // Получаем токен из AsyncStorage

      const response = await fetch(`http://${EXPO_PUBLIC_TCPIP}:8000/user-info/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        return data; 
      } else {
        console.error("Request failed:", data);
        return null;
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getInformation();
      if (info) {
        setUserInfo(info);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userNameContainer}>
          {userInfo ? (
            <Text style={styles.userName}>{userInfo.firstname} {userInfo.lastname}</Text>
          ) : (
            <Text style={styles.userName}>Loading...</Text>
          )}</View>
          </View>
          <View style={styles.InformationContainer}>
          {userInfo && (
            <Text style={styles.userAdditionalInfo}>{userInfo.additionalInfo}</Text> // Замените на нужное поле
          )}</View>
        
        <Image
          resizeMode="cover"
          source={{ uri: userInfo ? userInfo.avatarUrl : "https://cdn.builder.io/api/v1/image/assets/TEMP/default-avatar.png" }} // Замените на URL аватара пользователя
          style={[styles.userAvatar, { opacity: userInfo ? 1 : 0 }]} // Убираем прозрачность при загрузке данных
        />
      
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f63265fc075c1398986b8cede7ac84a5590e59d9cea965584c3e5324b8cc05?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
        style={styles.logoImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row', // Располагаем элементы в строку
    alignItems: 'center', // Центрируем по вертикали
    //backgroundColor: 'transparent', // Убираем фон
    paddingTop: 50,
    paddingLeft: 23,
    height: 200, // Задайте высоту для контейнера
  },
  logoImage: {
    width: 125,
    height: 125,
    marginLeft: 'auto', // Отодвигаем логотип вправо
  },
  userInfoContainer: {
    flexDirection: 'row', // Располагаем имя и аватар в строку
    alignItems: 'center', // Центрируем по вертикали
    marginRight: 20, // Отступ между аватаром и логотипом
  },
  userNameContainer: {
    backgroundColor: '#E9F2FF', // Возвращаем фон для имени
    borderRadius: 20,
    paddingHorizontal: 15, // Добавляем отступы по горизонтали
    paddingVertical: 10, // Добавляем отступы по вертикали
    marginRight: 10, // Отступ между именем и аватаром
    justifyContent: 'center', // Центрируем текст по вертикали
    alignItems: 'center', // Центрируем текст по горизонтали
  },
  userAvatar: {
    width: 125,
    height: 125,
    borderRadius: 62.5, // Делаем аватар кругом
  },
  userName: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 16,
    color: 'rgba(21, 38, 64, 1)',
    fontWeight: '600',
    letterSpacing: 0.02,
   },
   userAdditionalInfo: {
     fontFamily: 'Montserrat, sans-serif',
     fontSize: 14,
     color: 'rgba(100, 100, 100, 1)', // Цвет для дополнительной информации
   },
   InformationContainer: {
    backgroundColor: '#E9F2FF'
   }
});

export default Header;