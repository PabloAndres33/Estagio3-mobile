import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

const images = [
    'https://t2.tudocdn.net/612296?w=646&h=284',
]; 
const {width} = Dimensions.get("window");
const height = width * 0.6;

export default function Noticia2({navigation}) {
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
        <Text style={{marginBottom: 290, color: 'white', width: 400}}> A Samsung liberou recentemente a versão beta da interface One UI 5 baseada no Android 13 para alguns de seus smartphones avançados, incluindo dobráveis como o Galaxy Z Flip3 e Galaxy Z Fold3. Esse sistema vem com melhorias no desempenho, novos recursos e correção de bugs reportados pela comunidade, mas ainda com disponibilidade limitada.

De acordo com vazamentos, a desenvolvedora está trabalhando para lançar em breve o software para o Galaxy S21 FE, celular intermediário anunciado no 1º trimestre de 2022 pela sul-coreana com a plataforma Exynos 2100 e foco em custo-benefício, sendo o último modelo da linha Fan Edition lançado pela empresa asiática.</Text>
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