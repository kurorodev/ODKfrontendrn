import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const EventReminder = () => {
  return (
    <View style={styles.reminderContainer}>
      <Text style={styles.reminderTitle}>Ждешь корпоратив?</Text>
      <Text style={styles.reminderText}>
        Не забудь записать себя в список гостей и своих друзей!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reminderContainer: {
    borderRadius: 15,
    marginTop: 47,
    width: '100%',
    maxWidth: 320,
    paddingLeft: 21,
    paddingRight: 61,
    paddingVertical: 11,
  },
  reminderTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  reminderText: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 17,
    color: '#FFFFFF',
  },
});

export default EventReminder;
