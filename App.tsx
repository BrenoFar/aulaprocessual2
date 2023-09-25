import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomImage from './components/CustomImage';
import React from 'react';
import ImagemLocal from './assets/screenshot.png';
// verificar esse problema no tsx, algo de errado está acontecendo



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor='#AD6200' />
      <View>
        <ScrollView>
        <Text style={styles.tituloView}>Três Formas de Inserir Imagens</Text>
        <CustomImage
        fromWeb={false}
        image = {ImagemLocal}
        title='Imagem Local 1'
        width={200}
        height={300}
        />
        <CustomImage
        fromWeb={false}
        image = {require('./assets/breading7.jpg')}
        title='Imagem Local 2'
        width={200}
        height={300}
        />
        <CustomImage 
        fromWeb={true} 
        image='https://firebasestorage.googleapis.com/v0/b/heymyapp.appspot.com/o/man-1352025_640.png?alt=media&token=0b924d68-d525-4959-919f-67e7d1f009e0' 
        title='Imagem da Web' 
        width={200} 
        height={300}
        />
        </ScrollView>
      </View>


      </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ffC300',
  },
  tituloView:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  }
});
