import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import TaskItem from "./TaskItem";

function TaskSection({ title, tasks, backgroundColor }) {
  return (
    <View style={[styles.sectionContainer, { backgroundColor }]}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <TaskItem 
            key={index}
            title={task.title}
            status={task.status}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    borderRadius: 20,
    display: "flex",
    marginTop: 23,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 11,
    paddingBottom: 25,
    flexDirection: "column",
    alignItems: "stretch",
  },
  sectionTitle: {
    color: "rgba(56, 74, 102, 1)",
    fontSize: 24,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "900",
    letterSpacing: 0.02,
    alignSelf: "center",
  },
  taskList: {
    marginTop: 10,
  }
});

export default TaskSection;