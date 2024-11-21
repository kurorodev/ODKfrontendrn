import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Title from '../../components/Title';

function EnterpriseDocs() {
    const {id} = useLocalSearchParams();
    const link ='https://www.uecrus.com/about/structure/pao-odk-kuznetsov/docs/'
    const openLink = () => Linking.openURL(link);
    return (
        <View style={styles.container}>
            <Title title={"Документы предприятия"}/>
            <View>
                <Text style={styles.serviceName}>Все документы находяться на официальном сайте ПАО "ОДК-Кузнецов"</Text>
            </View>
            <TouchableOpacity onPress={() => openLink()}>
                <Text style={styles.servicePhone}>{link}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: 'center',
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        alignSelf: 'center',
        textAlign:"center"
    },
    serviceName: {
        fontFamily: "Montserrat",
        letterSpacing: 0.1,
        fontWeight: 10,
        fontSize: 20,
        color: '#566884',
        textAlign:"center"
    },
    servicePhone: {
        fontFamily: "Montserrat",
        fontSize: 20,
        color: '#162741',
        textAlign:"center"
    }
});

export default EnterpriseDocs