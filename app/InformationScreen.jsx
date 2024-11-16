import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InfoCard from "../components/InfoCard";

const infoCards = [
  {
    title: "Документы предприятия",
    iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b936065600bddf68b73fdd5c45c92edcee35dd4e7f3368d550dc9a47ed541c?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594",
    imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/387d31e5bf6aa355bc0ea8bf56b57cf8d042ec937e61de43372c32a1126b317c?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594",
  },
  {
    title: "Телефонный справочник",
    iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b936065600bddf68b73fdd5c45c92edcee35dd4e7f3368d550dc9a47ed541c?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594",
    imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80211094fc3468c2251d9263480992cc8bbc90beac5caee06efc5c5fe97b87b3?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594",
  },
  {
    title: "Информация об экстренных службах",
    iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b936065600bddf68b73fdd5c45c92edcee35dd4e7f3368d550dc9a47ed541c?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594",
    imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b354a0f951c1a108c980a96ce6155c2dfd1ced3b34cc8e75f294fd8665e8a7c8?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594",
  },
];

function InformationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Информация</Text>
      {infoCards.map((card, index) => (
        <InfoCard
          key={index}
          title={card.title}
          iconUri={card.iconUri}
          imageUri={card.imageUri}
        />
      ))}
    </View>
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
    paddingTop: 64,
    paddingBottom: 358,
    flexDirection: "column",
    overflow: "hidden",
    alignItems: "stretch",
  },
  header: {
    color: "rgba(21, 38, 64, 1)",
    fontSize: 36,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "900",
    letterSpacing: 0.04,
    textAlign: "center",
    alignSelf: "center",
  },
});

export default InformationScreen;