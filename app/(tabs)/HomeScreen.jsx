import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CategoryButton from '../../components/CategoryButton';
import { router } from 'expo-router';

const categories = [
  { id: 1, title: 'Заказать справку', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a0b6282be994a9c30f38c41604ba91e4d52b759436ee4a11ff0b8d550ba8b4f?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e', screen: "SpravkaSelectionScreen"},
  { id: 2, title: 'Обучение', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0b070a18ab5149be41f1085301260c8bfd6cf26b57cf4f3677db07c3811a0e75?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e', screen: "LearningSection"},
  { id: 3, title: '3D-тур', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/91b816d1d9c2d243ea5b637d1b96949021285c41ef7dbada989eb965ff199bb1?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
  { id: 4, title: 'Навигатор', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a19d160a88b3b4dee69837fdd0975c948e2cea471497c4bcfea7c837d31978c3?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
  { id: 5, title: 'Инфо', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ff126f05247caa824ea9292cd0dbc6cf1d51459e7764161cc799131e186af077?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e', screen: "InformationScreen" },
  { id: 6, title: 'Сервисы', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/008987770cd07ab2961be44b91a827d053423eeead00a1d2a7a194a51c53b681?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e' },
];

function HomeScreen() {
  const navigation = useNavigation();

  const handleCategoryPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <LinearGradient colors={['#162641', '#6081B2', '#B9D7F4', '#FFFFFF']}
      locations={[0.06, 0.28, 0.62, 0.92]}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GIGACHAT</Text>
          <TouchableOpacity style={styles.chatBotButton} onPress={() => router.push('GigaChat')}>
            <Text style={styles.chatBotButtonText}>Перейти в чат бот</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryGrid}>
          {categories.map((category, index) => (
            <CategoryButton
              key={category.id}
              title={category.title}
              icon={category.icon}
              onPress={() => handleCategoryPress(category.screen)}
              style={[
                styles.categoryButton,
                index <= 1 && styles.lightButton,
                index > 1 && styles.whiteButton,
                index > 3 && styles.blueButton,
              ]}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      flexGrow: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 480,
      width: '100%',
      paddingHorizontal: 28,
      paddingTop: 53,
      paddingBottom: 121,
    },
    header: {
      borderRadius: 40,
      width: '100%',
      paddingHorizontal: 29,
      paddingVertical: 26,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitle: {
      color: '#152640',
      fontSize: 32,
      lineHeight: 38.4,
      fontWeight: '700',
    },
    chatBotButton: {
      borderRadius: 20,
      backgroundColor: '#C5D8EC', // Устанавливаем цвет фона кнопки
      paddingVertical: 10, // Отступ по вертикали
      paddingHorizontal: 20, // Отступ по горизонтали
      marginTop: 10, // Отступ сверху
    },
    chatBotButtonText: {
      color: '#152640', // Цвет текста кнопки
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center',
    },
    categoryGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 26,
    },
    categoryButton: {
      width: '48%',
      marginBottom: 20,
    },
    lightButton: {
      backgroundColor: '#E9F2FF',
    },
    whiteButton: {
      backgroundColor: '#394C6B',
    },
    blueButton: {
      backgroundColor: '#152640',
    }
});
  
export default HomeScreen;