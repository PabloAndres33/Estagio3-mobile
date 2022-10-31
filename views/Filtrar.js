import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { css } from '../assets/css/Css';


import data from './data';

export default function Filtrar({navigation}){

    const [searchPhone, setSearchPhone] = useState('');

    return (
        <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
            <StatusBar  barStyle="light-content"/>
            <TextInput 
                placeholder='pesquisar...' 
                onChangeText={setSearchPhone}
            />
                
            <ScrollView>
                {data.filter((val) => {
                    if(searchPhone == "" ){
                        return val
                    }else if(val.name.toLowerCase().includes(searchPhone.toLowerCase())){
                        return val
                    }
                }).map((item, index) =>(
                    <Text key={index}>{item.name}</Text>
                ))}
            </ScrollView>
        </View>
           
       
    );
}

const style = StyleSheet.create({

})