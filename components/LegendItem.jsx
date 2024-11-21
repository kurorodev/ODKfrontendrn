import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

function LegendItem({ label, color }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendBox, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4, // Add vertical margin for better spacing between items
  },
  legendBox: {
    borderRadius: 5,
    width: 18,
    height: 19,
    marginRight: 6, // Use margin instead of gap for better compatibility
  },
  legendText: {
    fontFamily: 'Montserrat', // Removed the fallback for simplicity; ensure Montserrat is available
    fontSize: 14,
    color: "#334867",
    fontWeight: "700",
    letterSpacing: 0.01,
  }
});

export default LegendItem;