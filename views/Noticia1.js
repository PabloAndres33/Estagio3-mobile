import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

const images = [
    'https://t2.tudocdn.net/645589?w=646&h=284',
]; 
const {width} = Dimensions.get("window");
const height = width * 0.6;
export default function Noticia1({navigation}) {
    console.log({navigation});
    return (
        <View style={[css.container, css.darkbg]}>
            <ScrollView 
                pagingEnabled 
                horizontal 
                showsHorizontalScrollIndicator={true}
                style={style.scroll}>
            {
                images.map((image, index) => (
                    <Image 
                    key={index}
                    source={{uri:image} }
                    style={style.image}/>
                ))
            }
            </ScrollView>
            <Text style={{marginBottom: 300, color: 'white', width: 400}}>  A Sharp anunciou um novo celular básico que promete     entregar um bom conjunto por preço acessível. O Rouvo V é o primeiro modelo da categoria lançado desde o AQUOS Wish, que trazia uma boa combinação de desempenho e resistência física, e agora será uma nova opção de entrada para os consumidores dos Estados Unidos.

O Rouvo V possui uma tela TFT LCD de 6,5 polegadas com resolução HD+ (720 x 1.600 pixels) distribuída na proporção de 20:9 e taxa de atualização de 60 Hz. O display possui bordas espessas e um entalhe em formato de gota que abriga sua câmera frontal de 5 MP.</Text>
        </View>
        
    );
}

const style = StyleSheet.create({
    container: {marginTop: 10, width, height, backgroundColor:"#11385b", flex:1},

    scroll: {width, height},
    image: {width, height, resizeMode: 'cover'},
    pagination: {flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'},
    pagText: {color: '#888', margin: 3},
    pagActiveText: {color: '#fff', margin: 3}
})