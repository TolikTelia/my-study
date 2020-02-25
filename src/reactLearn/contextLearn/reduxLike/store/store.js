import React, {useState, useContext, useReducer} from 'react';
import buildContextRedux from "./useRedux";

const Vitya = {
    value: 1,
    input: ''
};

const reducer = (state, action) => {
    console.log(state.value);
    switch (action.type) {
        case 'INCREMENT_SOME':
            return {...state, value: state.value + 1};
        case 'SET_INPUT':
            return {...state, input: action.payload};
        default:
            return state
    }
};

export const [Context, connect, consumer] = buildContextRedux(Vitya, reducer);
