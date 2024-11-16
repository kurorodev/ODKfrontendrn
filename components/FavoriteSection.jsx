import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const FavoriteSection = () => {
  return (
    <View style={styles.favoriteContainer}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a55f6846fd01d98d12da948ba034c5e82876a178c240fb9da3e309e4787bd43?placeholderIfAbsent=true&apiKey=65fdb1995dc140d08a5c47f604771c3e" }}
        style={styles.favoriteIcon}
        resizeMode="contain"
      />
      <Text style={styles.favoriteText}>Избранное</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginTop: 34,
  },
  favoriteIcon: {
    width: 60,
    aspectRatio: 1,
  },
  favoriteText: {
    fontSize: 20,
    color: 'rgba(22, 39, 65, 1)',
    fontWeight: '700',
  },
});

export default FavoriteSection;
