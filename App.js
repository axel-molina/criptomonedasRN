import React from 'react'
import {
  View, StyleSheet, Image,
} from 'react-native';
import Header from './components/Header';


const App = () => {

  return (
    <View>
      <Header></Header>
      <Image 
      source={require('./assets/img/background.jpg')}
      style={styles.imagen}
      >
      </Image>
    </View>
  );
};

const styles = StyleSheet.create({
  imagen: {
    
  }
});

export default App;
