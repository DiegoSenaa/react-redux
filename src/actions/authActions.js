import firebase from 'firebase';


export const modificaEmail = (texto) =>{
    return {
        type: 'mdofica_email',
        payload: texto
    }
}

export const modificaSenha = (texto) =>{
    return {
        type: 'mdofica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) =>{
    return {
        type: 'mdofica_nome',
        payload: texto
    }
}

export const addUser = ({ nome, email, senha }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => cadastroUsuarioSucesso(dispatch))
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
    
}


const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: 'sucesso' });
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: 'cadastro_usuario_erro', payload: erro.message });
}