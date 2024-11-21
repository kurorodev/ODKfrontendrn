import React from 'react';
import { View, Text, StyleSheet, ScrollView, Clipboard, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Title from '../../components/Title';

// Пожарная охрана — 101
// Полиция — 102
// Скорая помощь — 103
// Аварийная служба газа — 104
// Экстренная помощь (МЧС) — 112

const emegData = [
    {name: "Пожарная охраная", data: "101"},
    {name: "Полиция", data: "102"},
    {name: "Скорая помощь", data: "103"},
    {name: "Аварийная служба газа", data: "104"},
    {name: "Экстренная помощь (МЧС)", data: "112"}
];

function InfoEmergencyServices() {
    const {id} = useLocalSearchParams();

    const copyToClipboard = (dataToCopy) => {
        Clipboard.setString(dataToCopy); // Копируем данные в буфер обмена
        Alert.alert('Скопировано!', 'Текст успешно cкопирован в буфер обмена.'); // Уведомление
      };

    return (
        <ScrollView style={styles.container}>
            <Title title={"Информация об экстренных службах"}/>
            {emegData.map((service, index) => (
                <View key={index} style={styles.serviceItem}>
                    <Text style={styles.serviceName}>{service.name}</Text>
                    <TouchableOpacity onPress={() => copyToClipboard(service.data)}>
                        <Text style={styles.servicePhone}>{service.data}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    serviceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    serviceName: {
        fontFamily: "Montserrat",
        letterSpacing: 0.1,
        fontWeight: 10,
        fontSize: 20,
        color: '#566884',
    },
    servicePhone: {
        fontFamily: "Montserrat",
        fontSize: 20,
        color: '#162741'
    }
});

export default InfoEmergencyServices