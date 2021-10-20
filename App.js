import React, {useEffect, useState} from 'react'
import {
  ScrollView, StyleSheet, StatusBar, ActivityIndicator, View
} from 'react-native';
import Header from './components/Header';
import Logo from './components/Logo';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';


const App = () => {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [consultarAPI, guardarConsultarAPI] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarcargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if(consultarAPI){
        //consultar api para obtener la cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        guardarcargando(true);
        //ocultar el spinner y mostrar el resultado
        setTimeout(() => {
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
        guardarConsultarAPI(false);
        guardarcargando(false);
        }, 3000);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  //mostrar el spinner o el resultado
  const componente = cargando ? <ActivityIndicator size='large' color='#8E44AD'/> : <Cotizacion resultado={resultado}></Cotizacion>

  return (
    <ScrollView style={styles.contenedor}>
      <StatusBar backgroundColor='#242328'></StatusBar>
      <Header/>
      <Logo/>
      <Formulario
      moneda={moneda}
      criptomoneda={criptomoneda}
      guardarMoneda={guardarMoneda}
      guardarCriptomoneda={guardarCriptomoneda}
      guardarConsultarAPI={guardarConsultarAPI}
      />
      <View style={styles.spinner}>
      {componente}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#242328',
  },
  spinner: {
    marginTop: 30,
  }
});

export default App;
