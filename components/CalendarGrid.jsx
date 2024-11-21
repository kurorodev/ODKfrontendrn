import * as React from "react";
import { View, StyleSheet } from "react-native";
import CalendarWeekHeader from "./CalendarWeekHeader";
import CalendarWeekRow from "./CalendarWeekRow";

function CalendarGrid() {
  const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  
  return (
    <View style={styles.gridContainer}>
      <CalendarWeekHeader weekDays={weekDays} />
      {[...Array(5)].map((_, index) => (
        <CalendarWeekRow key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    width: "100%",
    paddingHorizontal: 19,
  }
});

export default CalendarGrid;