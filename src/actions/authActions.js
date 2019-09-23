
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