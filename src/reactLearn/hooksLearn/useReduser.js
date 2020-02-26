import React, { useReducer } from 'react';

const UseReduser = () => {

    const state = {
        count: 0
    };

    const reducer = (state, action) => {
        const sameWith = (i) => ({...state, ...i});
        switch (action.type) {
            case 'INC':
                return sameWith({count: state.count + 1});
            case 'DEC':
                return sameWith({count: state.count - 1});
            case 'RESET':
                return sameWith({count: 0})
            default:
                return state
        }
    };

    const init = () => {

    };

    const [store, dispatch] = useReducer(reducer,state, init);
// v obschem chekai context learn with redux like
    return (
        <div>

        </div>
    );
};

export default UseReduser;