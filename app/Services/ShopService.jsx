import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ShopItems from '../../components/ShopItems';

const priceIcon = "https://s3-alpha-sig.figma.com/img/f22f/e378/60cec5637fe99b5709139a0e54a37ed6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qSYVCfHYLO3lk0GeyiLHxV04PaDHU-mgkH4HNuT3Oq7U-IRKQi0W3FD4LuqZKJBx6mtWj34sIv4awaMNcGyCMdSqRGan7N2T35c9omPBSA~~mHSrl3ay76LGIX1q1HX08qpvlYEP~Y0m~5UbB8d2TOLCvsw5vi3XaVeueybZoXJUAcyVtRpZXS5IYA1cJ8-33AqkcVOSvmsbETp03gF2WL1q9cPzfUJ1DFNlOmVGMvrwhRCJYPImtB9VxhWICbZ~ZXcmlGRMScDdIVMqJVslksGiVibhe26K81YjcENI0~sm0ME2HjsAtKErddUlr27lO4jNw9U0N7TiqNwaRqzSSg__"

const shopItems = [
    {id:"1", name:"Кофта (худи)", cost: 200, image: "https://ae04.alicdn.com/kf/Sbee517bcddf5495896ae59de07447df2J.jpg"},
    {id:"2", name:"Футболка", cost: 150, image: "https://storage.vsemayki.ru/images/0/2/2571/2571701/previews/people_16_manshortfull_front_white_500.jpg"},
    {id:"3", name:"Ручка", cost: 30, image: "https://ir.ozone.ru/s3/multimedia-v/c1000/6721065679.jpg"},
    {id:"4", name:"Блокнот", cost: 110, image: "https://ir.ozone.ru/s3/multimedia-y/c1000/6659007910.jpg"},
    {id:"5", name:"Рамка гос. номера", cost: 100, image: "https://ae04.alicdn.com/kf/A76b2c34cbd9540d8aaf74e2a44ac6af0i.jpg"},
    {id:"6", name:"Обложка на паспорт", cost: 80, image: "https://cdn1.ozone.ru/s3/multimedia-e/6555463418.jpg"},
]

function ShopService() {
    const {id} = useLocalSearchParams();
    return (
        <ScrollView>
            <View style={styles.viewTitle}>
                <Text style={styles.title}>Наш мерч!</Text>
            </View>
            <View style={styles.grid}>
                {shopItems.map(item => (
                    <ShopItems 
                        key={item.id}
                        image={item.image}
                        text={item.name} 
                        buttonText={"Купить"} 
                        cost={item.cost}
                        priceIcon= {priceIcon}
                        onImageClick={()=>null}
                        //onPress={() => console.log(item.id)}
                    />
                ))}
            </View>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10
    },
    viewTitle:{
        //backgroundColor: "green",
        width: '100%',
        height: 50,
        justifyContent: "center"
    },
    title:{
        fontFamily: 'Montserrat',
        fontWeight: 100,
        fontSize: 36,
        letterSpacing: 0.1,
        textAlign: 'center',
        color: '#162741',
    }
})
    

export default ShopService