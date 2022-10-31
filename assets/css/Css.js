import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textPage:{
        backgroundColor:'orange',
        padding: 20
    },
    darkbg:{
        backgroundColor:"#11385b"
    },
    login__logomarca:{
        marginBottom: 10
    },
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button:{
        padding: 12,
        backgroundColor: "#8c52ff",
        alignSelf:"center",
        borderRadius:5
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    },
    login__button_menu:{
        padding: 12,
        backgroundColor: "#8c52ff",
        alignSelf:"center",
        borderRadius:5
    },
    login__logomarca__menu:{
        marginBottom: 10
    },
    login__buttonText__menu:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#11385b"
    },

});
export {css};