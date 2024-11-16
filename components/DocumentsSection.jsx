import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import DocumentIcon from "./DocumentIcon";

const DocumentsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Документы</Text>
      </View>
      <View style={styles.iconContainer}>
        <DocumentIcon
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c59d83a6ed23ce4f6521dc8eb79019a9410c941151bb2f519cc5ffe1c0405d56?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
          style={styles.documentIcon}
        />
        <DocumentIcon
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2fd99108f37059fed95713966e3f3318d7d05eecd301aa379e1f278a7afd3338?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
          style={styles.arrowIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    display: "flex",
    marginTop: 10,
    width: "100%",
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 6,
    alignItems: "stretch",
    gap: 20,
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  title: {
    color: "rgba(21, 38, 64, 1)",
    fontSize: 14,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "900",
    letterSpacing: 0.01,
  },
  iconContainer: {
    display: "flex",
    alignItems: "stretch",
    gap: 39,
  },
  documentIcon: {
    width: 84,
    aspectRatio: 1.38,
  },
  arrowIcon: {
    width: 8,
    aspectRatio: 0.57,
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default DocumentsSection;