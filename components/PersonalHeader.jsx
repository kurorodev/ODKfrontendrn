import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window'); 

function Header() {
  const [userInfo, setUserInfo] = useState(null);
  const [coinCount, setCoinCount] = useState(0); // Состояние для хранения количества коинов

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

  const getCoinCount = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken'); 

      const response = await fetch(`http://192.168.1.7:8000/coins/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setCoinCount(data.coins); // Предполагается, что количество коинов находится в поле "coins"
      } else {
        console.error("Request failed:", data);
      }
    } catch (error) {
      console.error('Error fetching coin count:', error);
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
    getCoinCount(); // Запрос на получение количества коинов
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/64f63265fc075c1398986b8cede7ac84a5590e59d9cea965584c3e5324b8cc05?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
          style={styles.logoImage}
        />
        <Text style={styles.userName}>
          {userInfo ? `${userInfo.firstname} ${userInfo.lastname}` : "Loading..."}
        </Text>
      </View>

      <View style={styles.coinsContainer}>
        <Text style={styles.coinsText}>Количество ОДК-коинов: {coinCount}</Text>
      </View>

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
    width: '100%',
  },
  headerContainer: {
    zIndex: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: height * 0,
    paddingHorizontal: width * 0.05,
    height: height * 0.2,
  },
  logoImage: {
    width: width * 0.3,
    height: width * 0.3,
    marginRight: width * 0.02,
  },
  userName: {
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
   coinsContainer: {
     backgroundColor: '#E9F2FF',
     borderRadius: 10,
     paddingVertical: height * 0.01,
     paddingHorizontal: width * 0.01,
     marginTop: height * 0.01,
   },
   coinsText: {
     fontSize: width * 0.035,
     color: 'rgba(21, 38, 64, 1)',
     textAlign: 'center',
     fontWeight: '600',
   },
   userAdditionalInfoContainer: {
     backgroundColor: '#E9F2FF',
     borderRadius: 10,
     paddingVertical: height * 0.02,
     paddingHorizontal: width * 0.05,
     marginTop: height * 0.01,
   },
   userAdditionalInfo: {
     fontSize: width * 0.035,
     color: 'rgba(21, 38, 64, 1)',
     textAlign: 'left',
     fontWeight: '600',
   },
});

export default Header;
