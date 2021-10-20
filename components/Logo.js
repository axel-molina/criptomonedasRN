import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const Logo = () => {
    return (
    <View style={styles.imageContainer}>
        <Image source={require('../assets/img/logo.png')} style={styles.imagen}/>
    </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    imageContainer: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      imagen: {
        width: 100,
        height: 100,
      }
})
