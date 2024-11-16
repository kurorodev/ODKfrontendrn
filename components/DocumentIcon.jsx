import React from "react";
import { Image, StyleSheet } from "react-native";

const DocumentIcon = ({ source, style }) => {
  return (
    <Image
      resizeMode="contain"
      source={source}
      style={[styles.icon, style]}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
  },
});

export default DocumentIcon;