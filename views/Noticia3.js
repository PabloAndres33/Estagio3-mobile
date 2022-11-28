import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

const images = [
    'https://t2.tudocdn.net/639191?w=646&h=284',
]; 
const {width} = Dimensions.get("window");
const height = width * 0.6;
export default function Noticia3({navigation}) {
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
            <Text style={{marginBottom: 300, color: 'white'}}>  Apesar do lançamento ainda distante, o conhecido Max Jambor revelou mais informações sobre o modelo OnePlus 11 5G. Em postagem compartilhada no Twitter, o vazador reafirmou que o aparelho será lançado na cor preta e com acabamento fosco.

Por outro lado, a segunda opção será na cor verde, mas a textura será brilhante e chamativa. Quanto ao smartphone em si, Jambor diz que ele deve sair da caixa com processador Snapdragon 8 Gen 2 e tela AMOLED de 6,7 polegadas que suporta taxa de 120 Hz.
Outras fontes afirmam que o OnePlus 11 deve ter construção em cerâmica na traseira e estrutura de metal, enquanto que a câmera principal pode ser de 50 MP e está acompanhada de lente ultrawide de 48 MP e telefoto de 32 MP.

Por fim, teremos bateria na casa dos 5.000 mAh com suporte para carregamento rápido de 100W e Android 13 nativo.</Text>
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