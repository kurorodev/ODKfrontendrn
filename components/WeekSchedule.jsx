import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DaySchedule from './DaySchedule';

const WeekSchedule = ({ weekNumber, startDate }) => {
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  return (
    <View style={styles.weekContainer}>
      <Text style={styles.weekTitle}>{weekNumber} НЕДЕЛЯ</Text>
      <View style={styles.daysHeader}>
        {daysOfWeek.map((day) => (
          <View key={day} style={styles.dayHeaderCell}>
            <Text style={styles.dayHeaderText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.daysContainer}>
        {daysOfWeek.map((day, index) => (
          <DaySchedule
            key={day}
            day={day}
            date={new Date(new Date(startDate).getTime() + index * 24 * 60 * 60 * 1000).getDate()}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    width: '100%',
    marginTop: 42,
  },
  weekTitle: {
    color: 'rgba(21, 38, 64, 1)',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.01,
    marginBottom: 8,
  },
  daysHeader: {
    display: 'flex',
    width: '100%',
    maxWidth: 392,
    flexDirection: 'row',
  },
  dayHeaderCell: {
    flex: 1,
    borderColor: 'rgba(51, 72, 103, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
  },
  dayHeaderText: {
    fontSize: 14,
    color: 'rgba(51, 72, 103, 1)',
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  daysContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: 392,
    flexDirection: 'row',
  },
});

export default WeekSchedule;
