import { Redirect, router } from 'expo-router';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

function ShopItemMacro({id, name, discription, cost, image ,add, buttonText}) {
    return (
        <ScrollView style={styles.containerSpace}>
            <View style={styles.container}>
                <Image 
                source={{ uri: image }}
                style={styles.image}
                />
                <View style={styles.textView}>
                    <Text style={styles.mainText}>{name}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>{cost}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.discriptionTitle}>
                <Text style={styles.price}>Описание:</Text>
                <Text style={styles.discriptionText}>{discription}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainText:{
        fontFamily : 'Montserrat',
        fontSize: 30,
        fontWeight: 60,
        letterSpacing: 0.1,
        color: "#334867",
    },
    containerSpace:{
        //marginTop: 30,
    },
    container:{
        marginTop: 30,
        width: '90%',
        alignSelf: "center",
        aspectRatio: 0.7,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: '#DDEBF9',
        margin: 5,
        //position: 'relative'
    },
    image:{
        alignSelf: "center",
        borderRadius: 30,
        width: '90%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain"
    },
    textView:{
        marginTop: 10,
        marginLeft: "5%",
        //backgroundColor : "green",
    },
    price:{
        fontFamily : 'Montserrat',
        fontSize: 25,
        fontWeight: 70,
        letterSpacing: 0.1,
        color: "#6889B8"
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    priceIcon:{
        width: 13,
        aspectRatio: 1,
        tintColor :"#6889B8"
    },

    button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        justifyContent: "center",
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        width: "50%",
    },
    buttonText: {
        fontFamily : 'Montserrat',
        fontWeight: 10,
        color: '#53657E',
        fontSize: 20,
        letterSpacing: 0.1,
      },
    discriptionTitle:{
        marginLeft:30,
    },
    discriptionText:{
        fontFamily : 'Montserrat',
        fontSize: 15,
        fontWeight: 70,
        letterSpacing: 0.1,
        color: "#6889B8"
    }
})

export default ShopItemMacro