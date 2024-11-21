import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import BlankPage from '../../components/BlankPage';

function GameService() {
    const {id} = useLocalSearchParams();
    return (
        <BlankPage placeholder={"Игра"}/>
      );
}

export default GameService