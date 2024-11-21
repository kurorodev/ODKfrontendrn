import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LegendItem from "./LegendItem";

const { width, height } = Dimensions.get('window');

function CalendarLegend() {
  const legendItems = [
    { label: "Смены", color: "#B9D6F4" },
    { label: "Праздники", color: "#D1B9F4" }, // Example color for Holidays
    { label: "Собрания", color: "#F4F2B9" }, // Example color for Meetings
    { label: "Выходные", color: "#BDF4B9" } // Example color for Weekends
  ];

  return (
    <View style={styles.legendContainer}>
      <View style={styles.legendRow}>
        {legendItems.map((item, index) => (
          <LegendItem key={index} label={item.label} color={item.color} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  legendContainer: {
    alignSelf: "stretch",
    marginTop: height * 0.005,
    paddingHorizontal: width * 0.05,
  },
  legendRow: {
    flexDirection: 'column', // Horizontal alignment of LegendItems
    justifyContent: 'space-between', // Even spacing between items
    marginTop: 4,
  }
});

export default CalendarLegend;