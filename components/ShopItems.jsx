import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from 'react-native';

function ShopItem({id, image, text, buttonText, cost, priceIcon,onImageClick ,onAddClick}) {

    const onClick = () =>{
        console.log("shop item click")
    }
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => onImageClick(id)}>
                    <Image 
                    source={{ uri: image }}
                    style={styles.image}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.textView}>
                <Text style={styles.mainText}>{text}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{cost}</Text>
                    <Image 
                        source={{ uri: priceIcon }}
                        style={styles.priceIcon}
                    />
                </View>
            </View>
        <TouchableOpacity style={styles.button} onPress={() => onAddClick(id)}>
                <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    mainText:{
        fontFamily : 'Montserrat',
        fontSize: 13,
        fontWeight: 60,
        letterSpacing: 0.1,
        color: "#334867",
    },
    container:{
        width: '45%',
        aspectRatio: 0.7,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: '#DDEBF9',
        margin: 5
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
        fontSize: 13,
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
        alignSelf: "center",
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        //paddingVertical: 12,
        justifyContent: "center",
        height: 30,
        alignItems: 'center',
        marginTop: 10,
        width: "70%",
    },
    buttonText: {
        fontFamily : 'Montserrat',
        fontWeight: 10,
        color: '#53657E',
        fontSize: 11,
        letterSpacing: 0.1,
      },
    // priceIconView:{
    //     width: 10,
    //     height: 10,
    //     resizeMode: "contain",
    // }

})

export default ShopItem