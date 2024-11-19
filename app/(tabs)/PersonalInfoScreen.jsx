import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, ScrollView } from 'react-native';
import InfoCard from '../../components/PersonalInfoCard';
import Header from '../../components/PersonalHeader';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { EXPO_PUBLIC_TCPIP } from '@env';


const handleLogout = async () => {
  try {
      // Отправляем запрос на выход
      const response = await fetch(`http://${EXPO_PUBLIC_TCPIP}:8000/logout/`, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${await AsyncStorage.getItem('jwtToken')}`,
              'Content-Type': 'application/json',
          },
      });

      if (response.ok) {
          // Удаляем токен из AsyncStorage
          router.push("LoginRegistrationScreen")
          await AsyncStorage.removeItem('jwtToken');
          console.log("Successfully logged out");
          // Здесь можно перенаправить пользователя на экран входа или выполнить другую логику
      } else {
          console.error("Logout failed:", await response.json());
      }
  } catch (error) {
      console.error('Error during logout:', error);
  }
};



const personalInfoData = [
  {
    title: 'Документы',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c59d83a6ed23ce4f6521dc8eb79019a9410c941151bb2f519cc5ffe1c0405d56?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594',
    arrowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2fd99108f37059fed95713966e3f3318d7d05eecd301aa379e1f278a7afd3338?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594'
  },
  {
    title: 'Задачи',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0506222addff23c78a3cbf3d34cccf56c7e307919a52e749a07498e94cfbfe3?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594',
    arrowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f65dc80fc84f00a7f0412afe43f15d5ac2aec3d5fb55d111c1d2e69251d2f45f?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594'
  },
  {
    title: 'Карьерный трек',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4bba6ed85c288270aed9a799f3619c8120a9073028acd587f139b8bc23cafc65?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594',
    arrowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f65dc80fc84f00a7f0412afe43f15d5ac2aec3d5fb55d111c1d2e69251d2f45f?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594'
  },
  {
    title: 'Запросить справку',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d1f75ffacb47de0616c28f0dfcc10df2292f8a2691f2f56e9d1f9510f8cd09f5?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594',
    arrowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f7358ea6b3046dc8324ea21eb980ddb03cd51d144d51a4234f112a4206d9e986?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594'
  },
  {
    title: 'Заявки',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0d626f9ba7cb5e6cbb5f6cfe60a5241dea55dc0e791ba0a752325ae25c3dd68a?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594',
    arrowIcon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f7358ea6b3046dc8324ea21eb980ddb03cd51d144d51a4234f112a4206d9e986?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594'
  },
];

function PersonalInfoScreen() {

  const [userInfo, setUserInfo] = useState(null); // Состояние для хранения информации о пользователе

  const getInformation = async () => {
    try {
      const token = await AsyncStorage.getItem('jwtToken'); // Получаем токен из AsyncStorage

      const response = await fetch('http://192.168.1.7:8000/user-info/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Используем правильный синтаксис для интерполяции
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json(); // Преобразуем ответ в JSON

      if (response.ok) {
        // Если запрос успешен, возвращаем данные
        return data; 
      } else {
        console.error("Request failed:", data);
        return null; // Возвращаем null в случае ошибки
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
      return null; // Возвращаем null в случае ошибки
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getInformation(); // Ждем результат выполнения функции
      if (info) {
        setUserInfo(info); // Сохраняем информацию о пользователе в состоянии
      }
    };

    fetchUserInfo(); // Вызываем функцию получения информации о пользователе
  }, []); // Пустой массив зависимостей означает, что этот эффект выполнится только один раз при монтировании компонента

  return (
    <LinearGradient colors={['#162641', '#6081B2', '#B9D7F4', '#FFFFFF']}
    locations={[0.06, 0.28, 0.62, 0.92]}>
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <ImageBackground
        resizeMode="cover"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c83490e2d4809570ed8305f1cb422050139c555a982a5dea98478d72d4afd760?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
        style={styles.personalInfoBanner}
      >
        {userInfo ? (
            <Text style={styles.userName}>{userInfo.information}</Text> // Отображаем имя пользователя
          ) : (
            <Text style={styles.userName}>Loading...</Text> // Показываем загрузку пока данные не получены
          )}
      </ImageBackground>
      {personalInfoData.map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          icon={item.icon}
          arrowIcon={item.arrowIcon}
          textColor={index === 0 ? '#152640' : 'rgba(218, 230, 243, 1)'}
          backgroundColor={
            index < 1 ? '#E9F2FF' : index < 3 ? '#394C6B' : '#152640'
          }
        />
      ))}
      <Button onPress={handleLogout}><Text textColor={"#000000"}>Выйти из профиля</Text></Button>
    </View>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingHorizontal: 23,
    paddingTop: 56,
    paddingBottom: 106,
  },
  personalInfoBanner: {
    position: 'relative',
    aspectRatio: 2.25,
    width: '100%',
    maxWidth: '100%',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 15,
    paddingBottom: 114,
  },
  bannerText: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
    color: 'rgba(83, 101, 126, 1)',
    fontWeight: '600',
    letterSpacing: 0.01,
    backgroundColor: "E9F2FF"
  },
});

export default PersonalInfoScreen;