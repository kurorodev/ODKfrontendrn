import React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const FullScreenImage = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/careertrack (2).png') } style={styles.image} resizeMode="cover" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 1,
    height: height * 1,
  },
});

export default FullScreenImage;