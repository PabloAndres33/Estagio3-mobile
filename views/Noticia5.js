import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

const images = [
    'https://t2.tudocdn.net/561996?w=646&h=284',
]; 
const {width} = Dimensions.get("window");
const height = width * 0.6;
export default function Noticia5({navigation}) {
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
            <Text style={{marginBottom: 400, color: 'white', width: 400}}>  O novo Huawei Mate X3 também tende a ser mais fino e leve, já que a Huawei ouviu o feedback do público sobre os modelos anteriores e resolveu agir.

Quanto ao processador do novo dobrável, há quem acredite que ele terá o chipset Snapdragon 8 Gen 2. No entanto, como de costume, o SoC não trabalhará com modem 5G, uma vez que a Huawei continua na lista de sanções dos Estados Unidos.</Text>
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