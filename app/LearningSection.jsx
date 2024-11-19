import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CourseCard from '../components/CourseCard';

const coursesData = [
  { title: 'Записаться на курсы', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2b29417bdba1d8e4e4db99ea6f832553f5f0d2de1fed47aed26cd72820c37474?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594' },
  { title: 'Онлайн обучение', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8fdaac110b860c79618e16e65271f23b60e51e6d9c4a1cb3b773baaecdf5394e?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594' },
  { title: 'Повышение квалификации', imageUri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1d5a7f6b3307d76fd03369b0241365bab491c1be3717eb1bee7708d14f98d3b6?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594' },
];

function LearningSection() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Обучение</Text>
      {coursesData.map((course, index) => (
        <CourseCard key={index} title={course.title} imageUri={course.imageUri} />
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 62,
    paddingBottom: 358,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'stretch',
  },
  title: {
    color: 'rgba(21, 38, 64, 1)',
    fontSize: 36,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '900',
    letterSpacing: 0.04,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default LearningSection;