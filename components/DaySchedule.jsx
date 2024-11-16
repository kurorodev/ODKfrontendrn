import React from 'react';
import { View, StyleSheet } from 'react-native';

const DaySchedule = ({ day, date }) => {
  const events = [
    { id: 1, duration: 25 },
    { id: 2, duration: 25 },
  ];

  return (
    <View style={styles.dayCell}>
      {events.map((event) => (
        <View key={event.id} style={[styles.event, { height: event.duration }]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dayCell: {
    borderColor: 'rgba(51, 72, 103, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    minHeight: 65,
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  event: {
    borderRadius: 5,
    display: 'flex',
    width: 40,
    marginTop: 5,
    backgroundColor: 'rgba(51, 72, 103, 0.2)',
  },
});

export default DaySchedule;
