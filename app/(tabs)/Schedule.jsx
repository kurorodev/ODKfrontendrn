import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeekSchedule from '../../components/WeekSchedule';

const Schedule = () => {
  const weeks = [
    { number: 1, startDate: '2024-10-01' },
    { number: 2, startDate: '2024-10-08' },
    { number: 3, startDate: '2024-10-15' },
    { number: 4, startDate: '2024-10-22' },
  ];

  return (
    //<LinearGradient colors={['#0000FF', '#FFFFFF']} style={styles.container}>
    <ScrollView>
    <View style={styles.scheduleContainer}>
      <Text style={styles.monthTitle}>ОКТЯБРЬ 2024</Text>
      {weeks.map((week) => (
        <WeekSchedule key={week.number} weekNumber={week.number} startDate={week.startDate} />
      ))}
    </View>
    </ScrollView>
    //</LinearGradient>
  );
};

const styles = StyleSheet.create({
  scheduleContainer: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 112,
    paddingBottom: 16,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
  },
  container: {
    flex: 1
  },
  monthTitle: {
    color: 'rgba(21, 38, 64, 1)',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0.02,
  },
});

export default Schedule;
