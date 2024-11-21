import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Image, Text, SafeAreaView, ActivityIndicator,MapWrapper} from 'react-native';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: "100%",
   width: "100%",
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
     <MapView
       style={styles.map}
       mapType="hybrid" // Изменение типа карты на спутниковый
       region={{
        latitude: 53.2058038772891, // широта Самары
        longitude: 50.275527571919994, // долгота Самары
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);