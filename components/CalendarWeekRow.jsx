import * as React from "react";
import { View, StyleSheet } from "react-native";
import CalendarCell from "./CalendarCell";

function CalendarWeekRow() {
  return (
    <View style={styles.weekRow}>
      {[...Array(7)].map((_, index) => (
        <CalendarCell key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  weekRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  }
});

export default CalendarWeekRow;