import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import firebase from 'firebase';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
// import {reducers} from './reducers';
import { /*rootEpic, */rootReducer } from './reducers';
import { loginUserEpic } from './epics';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCjRiRwc5Uh2RunZk--fzH1xSR2q8GL6mo',
            authDomain: 'reactmobile-a17c9.firebaseapp.com',
            databaseURL: 'https://reactmobile-a17c9.firebaseio.com',
            projectId: 'reactmobile-a17c9',
            storageBucket: 'reactmobile-a17c9.appspot.com',
            messagingSenderId: '439224222179'
        });
    }
    

    render() {
        // const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: { getJSON: ajax.getJSON }} );
        const store = createStore(
            rootReducer,
            {},
            applyMiddleware(thunkMiddleware, logger/*, epicMiddleware*/)
            );
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
