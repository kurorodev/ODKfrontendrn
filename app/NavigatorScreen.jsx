import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { YaMap } from 'react-native-yamap';

const NavigatorScreen = () => {
    useEffect(() => {
        // Инициализация API карт при монтировании компонента
        YaMap.init('5c36083f-0be3-48d4-b32c-f6c867ad87bc');
    }, []);

    return (
        <View style={styles.container}>
            <YaMap 
                style={styles.map}
                userLocationIcon={{ uri: 'https://www.example.com/marker.png' }}
                initialRegion={{
                    lat: 53.2415041,  // Координаты Самары
                    lon: 50.2212463,
                    zoom: 12,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
export default NavigatorScreen;