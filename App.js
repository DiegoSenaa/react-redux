import React, {Component} from 'react';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import  firebase  from 'firebase';


import AppContainer from './src/Route';
import reducers from './src/reducers'

export default class App extends Component {

  componentDidMount(){
      // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCC50aMP_irneW1PxsikTWkSdtpBM0EUKU",
      authDomain: "wpp-clone-58e73.firebaseapp.com",
      databaseURL: "https://wpp-clone-58e73.firebaseio.com",
      projectId: "wpp-clone-58e73",
      storageBucket: "",
      messagingSenderId: "51832095191",
      appId: "1:51832095191:web:669fbc8fe26b47fdcfcb92",
      measurementId: "G-R303RYK6DB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppContainer />
      </Provider>
    );
  }
}
