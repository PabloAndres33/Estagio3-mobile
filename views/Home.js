import React from 'react';
import {Text, View, Button, KeyboardAvoidingView, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {css} from '../assets/css/Css';

const telaFundo = '../assets/telafundo.png';

export default function Home(props) {
    console.log(props);
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca__menu}>
              <Image source={require('../assets/techlogo.png')}></Image>
            </View>
            <View>
                <TouchableOpacity style={css.login__button_menu}>
                    <Text style={css.login__buttonText__menu} onPress={()=>props.navigation.navigate('Login')}>   Login   </Text>
                </TouchableOpacity>
            </View>
            <Text></Text>
            <View>
                <TouchableOpacity style={css.login__button_menu}>
                    <Text style={css.login__buttonText__menu} onPress={()=>props.navigation.navigate('Cadastro')}>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}