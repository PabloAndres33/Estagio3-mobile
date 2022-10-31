import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, TextInput,TouchableOpacity,Image, Text, View, Button, StyleSheet} from 'react-native';
import {css} from '../assets/css/Css';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Fire';


export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createLogin() {
        await signInWithEmailAndPassword(auth, email, password).then(value => {
            console.log('Login efetuado com sucesso! \n' + value.user.uid);
            navigation.navigate('Principal');
        }).catch(error => console.log(error));
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
              <Image source={require('../assets/techlogo.png')}></Image>
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário'  value={email}
                onChangeText={value => setEmail(value)}></TextInput>

                <TextInput style={css.login__input} placeholder='Senha' value1={password}
                onChangeText={value1 => setPassword(value1)} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={css.login__button} onPress={()=>createLogin()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}