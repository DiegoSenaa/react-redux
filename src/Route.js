import { createStackNavigator, createAppContainer } from "react-navigation";

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';


const AppNavigator = createStackNavigator({
        FormLogin: {
            screen: FormLogin,
            navigationOptions: () => ({
                title: `Login`,
                headerBackTitle: 'Login',
                headerTitleStyle: { 
                    textAlign:"center", 
                },
            }),
        },
        FormCadastro: {
            screen: FormCadastro,
            navigationOptions: () => ({
                title: `Cadastro`,
                headerBackTitle: 'Cadastro',
                headerTitleStyle: { 
                    textAlign:"center", 
                },
            }),
        },
    },
    {
        initialRouteName: 'FormLogin'
    }
);

export default createAppContainer(AppNavigator);