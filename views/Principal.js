import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { css } from '../assets/css/Css';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const {width} = Dimensions.get("window");
const height = width * 0.6;

const images = [
    'https://i.postimg.cc/Fzdz68Cf/teste1.png',
    'https://i.postimg.cc/hvq148Ft/teste1.png',
    'https://i.postimg.cc/RVt2RmQk/teste1.png'
];

export default function Principal({navigation}){
    const Tab = createMaterialBottomTabNavigator();
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
            <ScrollView>
            <TouchableOpacity style={css.filtrar} onPress={()=>navigation.navigate('Filtrar')}>
                    <Text style={css.login__buttonText}>Filtrar</Text>
                </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 20, alignSelf: 'center'}} onPress={()=>navigation.navigate('Noticia1')}>
                   <Image source={require('../assets/noticia2.png')}></Image><Text onPress={()=>navigation.navigate('Noticia1')}></Text>
                </TouchableOpacity>
                <View><Text style={{color: 'white'}}></Text></View>
                <TouchableOpacity style={{marginTop: 0,marginBottom: 0, alignSelf: 'center'}} onPress={()=>navigation.navigate('Noticia2')}>
                    <Image source={require('../assets/noticia11.png')}></Image>
                </TouchableOpacity>
                <View><Text style={{color: 'white'}}></Text></View>
                <TouchableOpacity style={{marginTop: 0,marginBottom: 0, alignSelf: 'center'}} onPress={()=>navigation.navigate('Noticia2')}>
                    <Image source={require('../assets/noticia3.png')}></Image>
                </TouchableOpacity>
            </ScrollView>
       </View>
        
       
    );
}

const style = StyleSheet.create({
    container: {marginTop: 10, width, height, backgroundColor:"#11385b", flex:1},

    scroll: {width, height:400},
    image: {width, height, resizeMode: 'cover'},
    pagination: {flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center'},
    pagText: {color: '#888', margin: 3},
    pagActiveText: {color: '#fff', margin: 3}
})