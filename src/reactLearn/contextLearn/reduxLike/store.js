import React, {useState, useContext, useReducer} from 'react';
import buildContextRedux from "./useRedux";

const Vitya = {
    value: 1,
    input: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SOME':
            return {...state, some: action.payload};
        case 'SET_VITYA':
            return {...state, vitya: action.payload};
        default:
            return state
    }
};

export const [Context, provider, consumer] = buildContextRedux(Vitya, reducer);
