import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';

const {width} = Dimensions.get("window");
const height = width * 0.6;

const images = [
    'https://i.postimg.cc/Fzdz68Cf/teste1.png',
    'https://i.postimg.cc/hvq148Ft/teste1.png',
    'https://i.postimg.cc/RVt2RmQk/teste1.png'
];

export default function Principal(){


    return (
        <View style={[style.container, css.darkbg]}>
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
            <TouchableOpacity style={{marginBottom: 550, alignSelf: 'center'}}>
                    <Image source={require('../assets/noticia2.png')}></Image>
                </TouchableOpacity>
                <View><Text style={{color: 'white'}}>testadno</Text></View>
                <TouchableOpacity style={{marginTop: -550, alignSelf: 'center'}}>
                    <Image source={require('../assets/noticia11.png')}></Image>
                </TouchableOpacity>
                
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