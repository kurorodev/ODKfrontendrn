import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function InfoCard({ title, iconUri, imageUri, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} accessibilityRole="button">
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: iconUri }}
          style={styles.icon}
          accessible={true}
          accessibilityLabel={`Icon for ${title}`}
        />
        <Image
          resizeMode="contain"
          source={{ uri: imageUri }}
          style={styles.image}
          accessible={true}
          accessibilityLabel={`Image for ${title}`}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    display: "flex",
    marginTop: 28,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 13,
    flexDirection: "column",
    backgroundColor: "#E9F2FF",
  },
  titleContainer: {
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  title: {
    color: "rgba(50, 67, 92, 1)",
    fontSize: 16,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "900",
    letterSpacing: 0.02,
  },
  iconContainer: {
    zIndex: 10,
    display: "flex",
    marginTop: -4,
    alignItems: "stretch",
    gap: 37,
  },
  icon: {
    position: "relative",
    display: "flex",
    marginTop: 69,
    width: 14,
    aspectRatio: 1.75,
  },
  image: {
    position: "relative",
    display: "flex",
    width: 139,
    flexShrink: 0,
    maxWidth: "100%",
    aspectRatio: 1.53,
  },
});

export default InfoCard;