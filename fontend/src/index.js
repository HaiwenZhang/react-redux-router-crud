import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';


import './index.css';
import App from './App';
import rootReducer from './rootReducer';


import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )    
);

ReactDOM.render(

    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
