import * as React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import TaskSection from "../components/TaskSection";

const personalTasks = [
  { title: "Принять в обр. детали", status: "pending" },
  { title: "Обработать 20 деталей", status: "pending" },
];

const productionTasks = [
  { title: "Выполнить норматив", status: "pending" },
  { title: "Собрать всю документацию", status: "inProgress" },
];

function TaskList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Задачи</Text>
        
        <TaskSection 
          title="Личные"
          tasks={personalTasks}
          backgroundColor="#E9F2FF" // Light blue for personal tasks
        />
        
        <TaskSection 
          title="Производство"
          tasks={productionTasks}
          backgroundColor="#B9D6F4" // Lighter blue for production tasks
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 480,
    width: "100%",
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 61,
    paddingBottom: 139,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  mainTitle: {
    color: "rgba(21, 38, 64, 1)",
    fontSize: 36,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "900",
    letterSpacing: 0.04,
    alignSelf: "center",
  }
});

export default TaskList;