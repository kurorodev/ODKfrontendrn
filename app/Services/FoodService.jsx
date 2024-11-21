import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import BlankPage from '../../components/BlankPage';

function FoodService() {
    const {id} = useLocalSearchParams();
    return (
        <BlankPage placeholder={"Питание"}/>
    );
}

export default FoodService