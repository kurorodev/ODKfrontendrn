import * as React from "react";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import CalendarGrid from "../../components/CalendarGrid";
import CalendarHeader from "../../components/CalendarHeader";
import CalendarLegend from "../../components/CalendarLegend";
import AddReminderButton from "../../components/AddReminderButton";

const { width, height } = Dimensions.get('window');

function CalendarLayout() {
  return (
    <ScrollView>
    <View style={styles.calendarContainer}>
      <CalendarHeader />
      <CalendarLegend />
      <CalendarGrid />
      <AddReminderButton />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingTop: width * 0.05,
    paddingBottom: 99,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "center",
  }
});

export default CalendarLayout;