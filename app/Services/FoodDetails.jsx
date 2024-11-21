import { Redirect, router } from 'expo-router';

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ShopItemMacro from '../../components/ShopItemMacro';

function FoodDetails() {
    const {id, name, discription, price, image, add, buttonText} = useLocalSearchParams();
    return (
        <ShopItemMacro 
        id={id}
        name={name} 
        discription={discription} 
        cost={price} 
        image={image} 
        add = {add}
        buttonText= {buttonText}
        />
    );
}

export default FoodDetails