import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cotizacion = ({resultado}) => {

    //si el objeto resultado está vació no se muestra el componente.
    if(Object.keys(resultado).length === 0) return null;

    return (
        <View style={styles.resultado}>
            <Text style={[styles.text]}>
             <Text style={[styles.span, styles.precio]}>{resultado.PRICE}</Text>
            </Text>
            <Text style={styles.text}>El precio más alto del día: {' '}
             <Text style={styles.span}>{resultado.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>El precio más bajo del día: {' '} 
             <Text style={styles.span}>{resultado.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>Variación últimas 24 horas: {' '} 
             <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.text}>Última actualización: {' '} 
             <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

export default Cotizacion

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#8E44AD',
        marginHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 16
    },
    precio: {
        fontSize: 35,
    },
    span: {
        fontSize: 20,
    }

})
