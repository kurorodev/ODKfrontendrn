import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

function CalendarWeekHeader({ weekDays }) {
  return (
    <View style={styles.weekHeader}>
      {weekDays.map((day, index) => (
        <View key={index} style={styles.dayHeader}>
          <Text style={styles.dayText}>{day}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  weekHeader: {
    display: "flex",
    marginTop: 27,
    width: "100%",
    flexDirection: "row",
  },
  dayHeader: {
    flex: 1,
    borderColor: "rgba(51, 72, 103, 1)",
    borderWidth: 1,
    padding: 5,
    alignItems: "center",
  },
  dayText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    color: "rgba(51, 72, 103, 1)",
    fontWeight: "700",
    letterSpacing: 0.01,
  }
});

export default CalendarWeekHeader;