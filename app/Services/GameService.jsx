import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import BlankPage from '../../components/BlankPage';

function GameService() {
    const {id} = useLocalSearchParams();

    const [size, setSize] = useState(100); // Начальный размер куба

    const handlePress = () => {
        setSize(size === 100 ? 150 : 100); // Увеличиваем или уменьшаем размер
    };

    return (
        <View style={styles.view}>
            <View>
                <Text style={styles.title}>Game Service</Text>
                <Text style={styles.title}>Game Service</Text>
                <Text style={styles.title}>Game Service</Text>
            </View>
            <TouchableHighlight onPress={handlePress} style={styles.mainView}>
                <View style={[styles.cube, { width: size, height: size }]} />
            </TouchableHighlight>
        </View>
      );
}

const styles = StyleSheet.create({
    view:{
        width: "100%",
        height: "100%",
        backgroundColor:"green",
        flex: 1,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    cube: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    cube1: {
        width: 110,
        height: 110,
        backgroundColor: 'blue'
    }


})

export default GameService