import React, {Component} from 'react';
import {Text, TextInput, Button,View,StyleSheet,TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import {modificaEmail,modificaSenha} from '../actions/authActions'

class FormLogin extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text>Wpp Clone</Text>
            </View>
            <View style={styles.containerMid}>
                <TextInput placeholder="Email" style={styles.inputs} onChangeText={texto => this.props.modificaEmail(texto)}></TextInput>
                <TextInput placeholder="Senha" style={styles.inputs} onChangeText={texto => this.props.modificaSenha(texto)}></TextInput>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('FormCadastro')}>
                    <Text style={styles.title}>Ainda não tem cadastro? Cadastre-se</Text>
                </TouchableHighlight>
            </View>
            <View  style={styles.containerBotton}>
                <Button title="Login" color="#115E54" onPress={() => false}></Button>
            </View>
            </View>
        );
    }
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
    },
    inputs:{
        fontSize:20,
        height: 45,
    },
    button:{
        
    }
});
