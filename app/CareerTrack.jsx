import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const FullScreenImage = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: require('../assets/careertrack.png') }} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default FullScreenImage;