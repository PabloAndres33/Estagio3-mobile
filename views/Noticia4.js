import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

const images = [
    'https://t2.tudocdn.net/648367?w=646&h=284',
]; 
const {width} = Dimensions.get("window");
const height = width * 0.6;
export default function Noticia4({navigation}) {
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
            <Text style={{marginBottom: 300, color: 'white', width: 400}}>  O Oukitel WP21 é o smartphone robusto com a melhor ficha técnica de 2022. Isso porque ele traz processador MediaTek Helio G99 de 6 nm e display com taxa de atualização de 120 Hz. Ou seja, um conjunto super atual para quem deseja até mesmo jogar games como League of Legends e Alto's Odyssey.

Além disso, esse smartphone também traz câmera principal de 64 MP, sensor Sony de 20 MP para visão noturna e macro de 2 MP que garantem um ótimo conjunto para fotos em todos os ambientes.

Outra inovação importante é a inédita tela dupla, uma vez que ele tem display externo que simula um relógio e pode ser uma boa opção para ver notificações e horas, por exemplo.

A presença de 12 GB de RAM com 256 GB de armazenamento interno é mais um aspecto que não deve ser ignorado.</Text>
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