import * as React from "react";
import { View, StyleSheet } from "react-native";

function CalendarCell() {
  return (
    <View style={styles.cell}>
      <View style={styles.indicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    borderColor: "rgba(51, 72, 103, 1)",
    borderWidth: 1,
    minHeight: 65,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    borderRadius: 5,
    minHeight: 42,
    width: 40,
    height: 41,
  }
});

export default CalendarCell;