import React from 'react';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'

import FirstChild from './components/someFirstChild'
import reducer from './reducers'

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const ReduxLearn = () => {

    return (
        <Provider store={store}>
            <div className='redux-learn'>
                <FirstChild />
            </div>
        </Provider>
    );
};

export default ReduxLearn;

