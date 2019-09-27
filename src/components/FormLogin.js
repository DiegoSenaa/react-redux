import React, {Component} from 'react';
import {Text, 
        TextInput, 
        Button,
        View,
        StyleSheet,
        TouchableHighlight,
        ImageBackground
} from 'react-native';
import {connect} from 'react-redux';

import {modificaEmail,modificaSenha} from '../actions/authActions'

const bg = require('../../resources/images/bg.png');

const FormLogin = props =>{
        return(
            <ImageBackground style={{flex : 1, width:null}} source={bg}>
                <View style={styles.container}>
                <View style={styles.containerTop}>
                    <Text style={styles.title}>Wpp Clone</Text>
                </View>
                <View style={styles.containerMid}>
                    <TextInput style={styles.inputs} value={props.email} onChangeText={texto => props.modificaEmail(texto)} placeholder="Email" placeholderTextColor="#fff"></TextInput>
                    <TextInput secureTextEntry style={styles.inputs} value={props.senha} onChangeText={texto => props.modificaSenha(texto)} placeholder="Senha" placeholderTextColor="#fff"></TextInput>
                    <TouchableHighlight onPress={() => props.navigation.navigate('FormCadastro')}>
                        <Text style={styles.title}>Ainda não tem cadastro? Cadastre-se</Text>
                    </TouchableHighlight>
                </View>
                <View  style={styles.containerBotton}>
                    <Button title="Login" color="#115E54" onPress={() => false}></Button>
                </View>
                </View>
            </ImageBackground>
        );
    }

const  mapStateToProps = state =>(
    {
        email: state.authReducer.email,
        senha: state.authReducer.senha
    }

);

export default connect(mapStateToProps, {modificaEmail,modificaSenha})(FormLogin);

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10
    },
    containerTop: {
        flex : 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    containerMid: {
        flex : 2
    },
    containerBotton: {
        flex : 1
    },
    title:{
        fontSize:20,
        color:'#fff',
    },
    inputs:{
        fontSize:20,
        height: 45,
    },
    button:{
        
    },
});
