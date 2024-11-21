import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function BlankPage({placeholder}) {
    return (
      <View style={styles.mainView}>
        <Text style={styles.mainText}>{placeholder}</Text>
        <Text style={styles.text}>В разработке</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    mainText:{
        fontFamily : 'Montserrat',
        fontSize: 36,
        fontWeight: 90,
        textAlign: "center",
        letterSpacing: 0.1,
        lineHeight: 43.88,
        color: "#152640"
    },
    text:{
      fontFamily : 'Montserrat',
      fontSize: 27,
      fontWeight: 90,
      textAlign: "center",
      letterSpacing: 0.1,
      lineHeight: 43.88,
      color: "#7A9AC3"
  },
    mainView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default BlankPage