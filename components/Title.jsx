import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Title({title}) {
    return (
        <View style={styles.viewTitle}>
            <Text style={styles.title}>{title}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    viewTitle:{
        width: '100%',
        justifyContent: "center",
        marginVertical: 20,
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
    

export default Title