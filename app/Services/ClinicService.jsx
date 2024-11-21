import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Title from '../../components/Title';
import ButtonInvert from '../../components/ButtonInvert';

policl = "Поликлиника от предприятия предлагает своим сотрудникам доступ к качественной медицинской помощи, что способствует поддержанию их здоровья и повышению производительности. Она обеспечивает удобное расположение и сокращает время на поездки к врачу, что особенно важно для занятых работников. Врачебные услуги часто предоставляются без очередей, что позволяет быстро получать необходимую помощь. Поликлиника также может предлагать профилактические осмотры и программы здоровья, способствующие раннему выявлению заболеваний. Наконец, наличие такой поликлиники повышает уровень социальной ответственности предприятия, заботящегося о благополучии своих сотрудников."
function ClinicService() {
    const {id} = useLocalSearchParams();
    return (
        <View>
            <Title title={"Поликлиника"}/>
            <View style={styles.container}>
                <Text style={styles.titleBody}>Немного о нас:</Text>
                <Text style={styles.body}>{policl}</Text>
                <View style={styles.button}>
                    <ButtonInvert title={"Записаться"}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E9F2FF",
        borderRadius: 20,
        margin: 10,
        padding: 10
    },
    titleBody:{
        marginTop: 10,
        marginVertical: 5,
        fontFamily: 'Montserrat',
        fontWeight : 80,
        fontSize: 24,
        letterSpacing: 0.1,
        color: '#384A66',
    },
    body:{
        marginTop: 10,
        marginVertical: 10,
        fontFamily: 'Roboto',
        fontWeight : 500,
        fontSize: 16,
        letterSpacing: 0.1,
        color: '#384A66',
    },
    button:{
        alignItems: "center",
    }
})

export default ClinicService