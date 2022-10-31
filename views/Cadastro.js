import React, {useState,useEffect} from 'react';
import {KeyboardAvoidingView, Platform, TextInput,TouchableOpacity,Image, Text, View, Button, StyleSheet} from 'react-native';
import {css} from '../assets/css/Css';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Fire';


export default function Cadastro({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password).then(value => {
            console.log('cadastrado com sucesso! \n' + value.user.uid);
            navigation.navigate('Principal');
        }).catch(error => console.log(error));
    };

     //Envio do formulário
     /*async function sendForm()
     {
         let response=await fetch('http://192.168.67.78:3000/create',{
             method: 'POST',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                email: user,
                password: password
             })
         });

         let json = await response.json();
        console.log(json);
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000);

        }else{
            navigation.navigate('Principal');
        }
     }*/
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
              <Image source={require('../assets/techlogo.png')}></Image>
            </View>
            <View style={styles.container}>
            <Text>Firebase App</Text>
            <TextInput 
                placeholder= "email"
                placeholderTextColor= "#313131"
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.input}
            />
            <TextInput 
                placeholder= "senha"
                placeholderTextColor= "#313131"
                value1={password}
                onChangeText={value1 => setPassword(value1)}
                style={[styles.input, {marginBottom: 10}]}
            />
            <Button 
                title="Cadastrar"
                onPress={() => createUser()}
            />
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
       borderBottomWidth: 1,
       borderBottomColor: '#313131',
       marginTop: 5,
       width: '80%',
       height: 50 
    }
})
