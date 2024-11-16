import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, ScrollView } from 'react-native';
import InfoCard from '../../components/PersonalInfoCard';
import Header from '../../components/PersonalHeader';
import DocumentsSection from '../../components/DocumentsSection';

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
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header />
      <ImageBackground
        resizeMode="cover"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c83490e2d4809570ed8305f1cb422050139c555a982a5dea98478d72d4afd760?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
        style={styles.personalInfoBanner}
      >
        <Text style={styles.bannerText}>Личная информация:</Text>
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
    </View>
    </ScrollView>
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