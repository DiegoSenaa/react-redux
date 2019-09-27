import React, {Component} from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground
} from 'react-native';
import {connect} from 'react-redux';

import {modificaEmail,
        modificaSenha,
        modificaNome,
        addUser,    
} from '../actions/authActions'


const bg = require('../../resources/images/bg.png');

class FormCadastro extends Component {

    _addUser(){

        const {nome, email, senha} = this.props;

        this.props.addUser({nome, email, senha});
    }

    render(){
        return (
            <ImageBackground style={{flex : 1, width:null}} source={bg}>
                <View style={styles.container}>
                    <View style={styles.containerTop}>
                        <TextInput style={styles.inputs} 
                                onChangeText={texto => this.props.modificaNome(texto)}  
                                placeholder="Nome" 
                                placeholderTextColor="#fff" 
                        />
                        <TextInput  style={styles.inputs} 
                                    onChangeText={texto => this.props.modificaEmail(texto)} 
                                    placeholder="Email" placeholderTextColor="#fff" 
                        />
                        <TextInput secureTextEntry 
                                   style={styles.inputs} 
                                   onChangeText={texto => this.props.modificaSenha(texto)} 
                                   placeholder="Senha" 
                                   placeholderTextColor="#fff" 
                        />
                    </View>
                    <View  style={styles.containerBotton}>
                        <Button title="Cadastrar" 
                                color="#115E54" 
                                onPress={() => this._addUser()}>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
        
}

const  mapStateToProps = state =>(
    {
        nome: state.authReducer.nome,
        email: state.authReducer.email,
        senha: state.authReducer.senha
    }

);

export default connect(
    mapStateToProps, 
    {
        modificaEmail,
        modificaSenha,modificaNome,
        addUser
    })(FormCadastro);

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10
    },
    containerTop:{
        flex:4,
        justifyContent: 'center',
        alignItems:'center'
    },
    containerBotton:{
        flex:4,
    },
    inputs:{
        fontSize:20,
        height: 45,
    },
});
