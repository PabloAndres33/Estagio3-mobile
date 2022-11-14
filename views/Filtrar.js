// import { StatusBar } from 'expo-status-bar';
// import React, {useState} from 'react';
// import {Text, View, Button, Image, FlatList, ScrollView, Dimensions, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
// import { css } from '../assets/css/Css';
// import {MaterialCommunityIcons} from '@expo/vector-icons';

// import data from './data';

// export default function Filtrar({navigation}){

//     const [searchPhone, setSearchPhone] = useState('');

//     return (
//         <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
//             <StatusBar  barStyle="light-content"/>
//             <TextInput 
//                 placeholder='Armazenamento...' 
//                 onChangeText={setSearchPhone}
//             />
                
//             <ScrollView>
//                 {data.filter((val) => {
//                     if(searchPhone == "" ){
//                         return val
//                     }else if(val.armazenamento.toLowerCase().includes(searchPhone.toLowerCase()) || val.processador.toLowerCase().includes(searchPhone.toLowerCase()) || val.ram.toLowerCase().includes(searchPhone.toLowerCase()) || val.tela.toLowerCase().includes(searchPhone.toLowerCase())){
//                         return val
//                     }
//                 }).map((item, index) =>(
//                     <Text key={index}><Image source={require('../assets/favicon.png')}></Image>{item.armazenamento}+{item.processador}+{item.ram}+{item.tela}={item.name}</Text>
//                 ))}
//             </ScrollView>
           
//         </View>
           
       
//     );
// }

// const style = StyleSheet.create({

// })

import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../assets/css/components';

import results from './data';

const Filtrar = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.spec.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...results];

    newList.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Armazenamento + RAM + Processador + tela"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        
      </View>

      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242425',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#363636',
    margin: 30,
    borderRadius: 5,
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#FFFFFF',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },
});

export default Filtrar;
