import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AddReminderButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>+ Добавить памятку</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 21,
    width: 220,
    maxWidth: "100%",
    paddingHorizontal: 25,
    paddingVertical: 16,
  },
  buttonText: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 15,
    color: "rgba(51, 72, 103, 1)",
    fontWeight: "900",
    textAlign: "center",
  }
});

export default AddReminderButton;