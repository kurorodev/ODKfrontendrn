import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function TaskItem({ title, status }) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.taskTitle}>{title}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{ 
          uri: status === "pending" 
            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/40289fb9f5e8f2d1afaa717897529a06a44fa0cdc480543c094f22cb2c8e85aa?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" 
            : "https://cdn.builder.io/api/v1/image/assets/TEMP/46e22b95356bf1709c21ebde3ade1ad1fe4fe988516c2e48057304d77e433375?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594"
        }}
        style={styles.taskIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    borderRadius: 20,
    display: "flex",
    marginTop: 14,
    paddingLeft: 20,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    alignItems: "stretch",
    gap: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emptyTask: {
    borderRadius: 20,
    display: "flex",
    marginTop: 14,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 4,
    paddingBottom: 4,
    flexDirection: "column",
    justifyContent: "center",
  },
  titleContainer: {
    marginTop: "auto",
    marginBottom: "auto",
    flexGrow: 1,
    flexShrink: 1,
  },
  taskTitle: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 20,
    color: "rgba(56, 74, 102, 1)",
    fontWeight: "700",
    letterSpacing: 0.02,
  },
  taskIcon: {
    position: "relative",
    display: "flex",
    width: 42,
    aspectRatio: 1,
  }
});

export default TaskItem;