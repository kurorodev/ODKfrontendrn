import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EXPO_PUBLIC_TCPIP } from '@env';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window'); 

function Header() {
  // const [fontsLoaded] = useFonts({
  //   'Montserrat': require('../assets/fonts/Montserrat.ttf'), // Укажите путь к вашему шрифту
  // });

  // if (!fontsLoaded) {
  //   return null; // Или индикатор загрузки
  // }

  const [userInfo, setUserInfo] = useState(null); 

  const getInformation = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken'); 

      const response = await fetch(`http://192.168.1.7:8000/user-info/`, {
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Логотип */}
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f63265fc075c1398986b8cede7ac84a5590e59d9cea965584c3e5324b8cc05?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
          style={styles.logoImage}
        />
        <Text style={styles.userName}>
          {userInfo ? `${userInfo.firstname} ${userInfo.lastname}` : "Loading..."}
        </Text>
      </View>

      <View>
        <Text>Одк коины</Text>
      </View>

      {/* Отображение информации о пользователе ниже */}
      {userInfo && (
        <View style={styles.userAdditionalInfoContainer}>
          <Text style={styles.userAdditionalInfo}>{userInfo.information}</Text> 
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', // Занимаем всю ширину экрана
  },
  headerContainer: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0.02,
    paddingHorizontal: width * 0.05,
    height: height * 0.3,
  },
  logoImage: {
    width: width * 0.3,
    height: width * 0.3,
    marginRight: width * 0.02,
    marginLeft: width * 0.00001,
  },
  userName: {
    //fontFamily: 'Montserrat', // Используем загруженный шрифт здесь
    fontSize: width * 0.04,
    color: 'rgba(21, 38, 64, 1)',
    fontWeight: '600',
    letterSpacing: 0.02,
    backgroundColor: '#E9F2FF',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderRadius: 10,
    marginRight: width * 0.05,
   },
   userAdditionalInfoContainer: {
     backgroundColor: '#E9F2FF', // Фон для дополнительной информации
     borderRadius: 10, // Закругление углов
     paddingVertical: height * 0.02, // Вертикальные отступы
     paddingHorizontal: width * 0.05, // Горизонтальные отступы
     marginTop: height * 0.01, // Отступ сверху от имени пользователя
     width: '100%', // Занимаем всю ширину
   },
   userAdditionalInfo: {
    //  fontFamily: 'Montserrat', // Используем загруженный шрифт здесь
     fontSize: width * 0.035,
     color: 'rgba(21, 38, 64, 1)',
     textAlign: 'left',
     fontWeight: '600',
   },
});

export default Header;