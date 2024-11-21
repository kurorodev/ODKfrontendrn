import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';


function SpravkaItem({ title, screen, id, onClick}) {
  
  return (
    <TouchableOpacity style={styles.container}
      onPress={() => onClick(id)}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd090dc6bfaea35a333a0838baaea63dd9164c5466bd354203f4506656ae23eb?placeholderIfAbsent=true&apiKey=bd452a46e1dd4f208e6deef46c735594" }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 34,
    marginBottom: 18,
    backgroundColor: '#E9F2FF',
  },
  contentContainer: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 90,
    color: 'rgba(50, 67, 92, 1)',
    letterSpacing: 0.02,
    textAlign: 'center',
  },
  icon: {
    width: 8,
    aspectRatio: 0.57,
  },
});

export default SpravkaItem;