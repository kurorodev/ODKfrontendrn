import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

function CalendarHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.calendarHeaderText}>ОКТЯБРЬ 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    color: "rgba(21, 38, 64, 1)",
    fontSize: 24,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    letterSpacing: 0.02,
  },
  calendarHeaderText: {
    fontFamily: 'Montserrat'
  }
});

export default CalendarHeader;