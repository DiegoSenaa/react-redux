import React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';

import {modificaEmail,modificaSenha,modificaNome} from '../actions/authActions'


FormCadastro = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TextInput style={styles.inputs} value={props.nome}  onChangeText={texto => props.modificaNome(texto)}  placeholder="Nome" ></TextInput>
                <TextInput style={styles.inputs} value={props.email} onChangeText={texto => props.modificaEmail(texto)} placeholder="Email" ></TextInput>
                <TextInput style={styles.inputs} value={props.senha} onChangeText={texto => props.modificaSenha(texto)} placeholder="Senha" ></TextInput>
            </View>
            <View  style={styles.containerBotton}>
                <Button title="Cadastrar" color="#115E54" onPress={() => false}></Button>
            </View>
        </View>
    );
}

const  mapStateToProps = state =>(
    {
        nome: state.authReducer.nome,
        email: state.authReducer.email,
        senha: state.authReducer.senha
    }

);

export default connect(mapStateToProps, {modificaEmail,modificaSenha,modificaNome})(FormCadastro);

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
