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

export const addUser = ({nome, email, senha}) =>{

    firebase.auth().createUserWithEmailAndPassword(email,senha)
        .then(user => console.warn(user))
        .catch(err => console.warn(err));

    return {
        type: 'add_user',
        //payload: texto
    }
}