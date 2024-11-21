import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import BlankPage from '../../components/BlankPage';

function ClinicService() {
    const {id} = useLocalSearchParams();
    return (
        <BlankPage placeholder={"Клиника"}/>
    );
}

export default ClinicService