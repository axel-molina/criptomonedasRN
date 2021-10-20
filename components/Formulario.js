import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarAPI}) => {

    const [criptomonedas, guardarCriptomonedas] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    const obtenerMoneda = moneda => {
        guardarMoneda(moneda)
    }

    const obtenerCriptomoneda = (cripto) => {
        guardarCriptomoneda(cripto)
    }

    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta();
            return;
        }
        //cambiar el state de consultarApi
        guardarConsultarAPI(true)
    }

    const mostrarAlerta = () => {
        ToastAndroid.show("Todos los campos son obligatorios", ToastAndroid.SHORT);
    }

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
            selectedValue={moneda}
            onValueChange={(moneda) => obtenerMoneda(moneda)}
            itemStyle={{height: 120}}
            style={styles.picker}
            >
                <Picker.Item label='Seleccione' value=''/>
                <Picker.Item label='Dolares' value='USD'/>
                <Picker.Item label='Pesos Argentinos' value='ARS'/>
                <Picker.Item label='Euros' value='EUR'/>
                <Picker.Item label='Libra Esterlina' value='GBP'/>
            </Picker>
            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
            selectedValue={criptomoneda}
            onValueChange={(cripto) => obtenerCriptomoneda(cripto)}
            itemStyle={{height: 120}}
            style={styles.picker}
            >
                <Picker.Item label='Seleccione' value=''/>
                 { criptomonedas.map( (cripto) => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
                )) }
            </Picker>
            <TouchableOpacity 
            style={styles.btnCotizar}
            onPress={() => cotizarPrecio()}
            >
                <Text style={styles.texto}>Cotizar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Formulario

const styles = StyleSheet.create({
    label: {
        textTransform: 'uppercase',
        color: '#CB5ACC',
        marginVertical: 20,
        marginLeft: 20,
    },
    picker:{
        color: 'white',
    },
    btnCotizar: {
        backgroundColor: '#8E44AD',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 10
    },
    texto: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        color: 'white',
    },
})
