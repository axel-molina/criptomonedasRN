import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    encabezado: {
        textAlign: 'center',
        fontSize: 25,
        paddingTop: Platform.OS == 'ios' ? 50 : 10,
        paddingBottom: 10,
        color: 'white',
        textTransform: 'uppercase',
    },
})
