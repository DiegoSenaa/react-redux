
const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''

}

export default (state= INITIAL_STATE,action) => {
    switch (action.type) {
        case 'mdofica_email':
            console.log(action.type);
            return {...state, email: action.payload};
        
        case 'mdofica_senha':
            console.log(action.type);
            return {...state, senha: action.payload};
        
        case 'mdofica_nome':
            console.log(action.type);
            return {...state, nome: action.payload};
    
        default:
            return state;
    }
    
    
}