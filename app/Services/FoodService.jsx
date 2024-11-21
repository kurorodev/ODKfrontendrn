import React from 'react';
import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Title from '../../components/Title';
import ShopItems from '../../components/ShopItems';
import { Redirect, router } from 'expo-router';

const detailsPath = "Services/FoodDetails"
const priceIcon = "г"
const shopItems = [
    {id:"1", name:"Рис", mass: "200г", image: "https://masterpiecer-images.s3.yandex.net/8950f0e97c9711ee9390f6c574779d3e:upscaled", discription : "Рис — это универсальный гарнир, который прекрасно дополняет любое блюдо. Он обладает легким вкусом и нежной текстурой, что делает его идеальным выбором для сочетания с мясом, рыбой или овощами. Рис можно готовить различными способами: варить, жарить или запекать, добавляя специи и травы для разнообразия. Наслаждайтесь его питательными свойствами и возможностью создавать множество вкусных комбинаций!"},
    {id:"2", name:"Гречка", mass: "200г", image: "https://pava-pava.com/upload/resize_cache/iblock/743/550_550_0/743a6c39be7e12296292c15f2f553044.jpg", discription : "Гречка — это питательная и полезная крупа, известная своим высоким содержанием белка и клетчатки. Она обладает ореховым вкусом и характерной текстурой, что делает её отличным гарниром для мясных и овощных блюд. Гречку можно готовить различными способами: варить, запекать или использовать в салатах. Она также является отличным выбором для вегетарианцев и тех, кто следит за своим питанием. Наслаждайтесь её полезными свойствами и разнообразием блюд, которые можно с ней приготовить!"},
    {id:"3", name:"Макароны", mass: "200г", image: "https://images.mrcook.app/recipe-image/clqi7dv58000v0cl53iic88wb", discription : "Макароны — это популярный и универсальный продукт, который является основой для множества блюд. Они имеют разнообразные формы и размеры, что позволяет использовать их в различных рецептах, от классических паст до запеканок. Макароны быстро готовятся и отлично впитывают соусы, придавая блюду насыщенный вкус. Их можно сочетать с овощами, мясом, морепродуктами или использовать в салатах. Наслаждайтесь их разнообразием и возможностью создавать вкусные и сытные блюда для всей семьи!"},
    {id:"4", name:"Котлеты куриные", mass: "150г", image: "https://static.insales-cdn.com/images/products/1/6074/898275258/%D0%BA%D0%BE%D1%82%D0%BB%D0%B5%D1%82%D1%8B-%D0%BA%D1%83%D1%80%D0%B8%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B5.jpg", discription : "Котлеты из курицы — это аппетитное и сытное блюдо, приготовленное из нежного куриного мяса. Они обладают великолепным вкусом и могут быть жареными, запеченными или приготовленными на пару. Котлеты отлично сочетаются с различными гарнирами, такими как картофель, рис или овощи, и являются отличным выбором для здорового питания. Наслаждайтесь их сочностью и ароматом, добавляя любимые специи и соусы!"},
    {id:"5", name:"Котлеты индейка", mass: "100г", image: "https://ogorod-shop.ru/upload/iblock/09c/ltc22q59gksjlvl1v9z44sr61oh6zdoi.jpg", discription : "Котлеты из индейки — это вкусное и полезное блюдо, приготовленное из нежного мяса индейки. Они идеально подходят для тех, кто следит за своим питанием, благодаря низкому содержанию жира и высокому уровню белка. Котлеты можно жарить, запекать или готовить на пару, подавая с разнообразными гарнирами. Наслаждайтесь их сочностью и ароматом, добавляя любимые специи и соусы!"},
    {id:"6", name:"Филе куриное", mass: "80г", image: "https://gotovim-doma.ru/images/recipe/8/9e/89e84bb02d012b8ef0bc1fdd51d9fe2c_l.jpg", discription : "Куриное филе — это нежное и сочное мясо, идеально подходящее для различных блюд. Его можно запечь, пожарить или отварить, придавая разнообразные ароматы с помощью специй и соусов. Куриное филе отлично сочетается с гарнирами из овощей или круп, что делает его универсальным выбором для здорового питания. Наслаждайтесь вкусом и легкостью приготовления этого блюда!"},
]

function FoodService() {
    //const {id} = useLocalSearchParams();

    const OnImgClick = (item) =>{
        router.push({
            pathname: detailsPath, // путь к экрану
            params: {
                id: item.id,
                name: item.name,
                price: item.mass,
                image: item.image,
                discription: item.discription,
                add: priceIcon,
                buttonText: "+ Добавить",
            },
          });
    }

    return (
        <ScrollView>
            <Title title={"Питание"}/>
            <View style={styles.grid}>
                {shopItems.map(item => (
                        <ShopItems 
                            key={item.id}
                            id= {item.id}
                            image={item.image}
                            text={item.name} 
                            buttonText={"+ Добавить"}
                            cost={item.mass}
                            priceIcon= {priceIcon}
                            onImageClick={(id)=>OnImgClick(shopItems.find(item => item.id === id))}
                            onAddClick={(id)=>console.log(id)}
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
    },

    touchable:{
        width: '45%',
        aspectRatio: 0.7,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: '#DDEBF9',
        margin: 5
    }
})
    

export default FoodService