import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomImage from './components/CustomImage';
import React from 'react';
const ImagemLocal = './assets/screenshot.png';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor='#AD6200' />
      <View>
        <Text style={styles.tituloView}>Três Formas de Inserir Imagens</Text>
        <CustomImage 
        fromWeb={true} 
        image='https://firebasestorage.googleapis.com/v0/b/heymyapp.appspot.com/o/man-1352025_640.png?alt=media&token=0b924d68-d525-4959-919f-67e7d1f009e0' 
        title='Imagem da Web' 
        width={200} 
        height={300}
        />
        <CustomImage
        fromWeb={false}
        image = {ImagemLocal}
        title='Imagem Local'
        width={200}
        height={300}
        />
        <CustomImage
        fromWeb={false}
        image = {require('./assets/screenshot.png')}
        title='Imagem Local'
        width={200}
        height={300}
        />

      </View>


      </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloView:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  }
});
