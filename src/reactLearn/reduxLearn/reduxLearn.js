import React from 'react';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import FirstChild from './components/someFirstChild'
import reducer from './templatesStoreRedux'

const store = createStore(reducer);

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

