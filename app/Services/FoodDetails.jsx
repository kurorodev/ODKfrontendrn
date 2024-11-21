import { Redirect, router } from 'expo-router';

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import BlankPage from '../../components/BlankPage';

function FoodDetails() {
    const {id} = useLocalSearchParams();
    console.log("IDDD " + id);
    return (
        <BlankPage placeholder={"FoodDetails"}/>
    );
}

export default FoodDetails