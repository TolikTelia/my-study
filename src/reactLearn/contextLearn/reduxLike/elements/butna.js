import React from 'react';
import {connect} from '../store/store'

const Butna = ({incrementValue, value}) => {
    console.log('butna');
    return (
        <button onClick={incrementValue}>{value}</button>
    );
};

export default connect(
    state => ({value: state.value}),
    dispatch => ({
        incrementValue() {
            dispatch({type:'INCREMENT_SOME', payload: {}});
        },
    })
)(Butna);