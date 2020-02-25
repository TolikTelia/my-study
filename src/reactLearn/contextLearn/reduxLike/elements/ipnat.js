import React from 'react';
import {connect} from '../store/store'

const Ipnat = ({input, setInput}) => {
    console.log('input');
    return (
        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
    );
};

export default connect(
    state => ({input: state.input}),
    dispatch => ({
        setInput(value) {
            dispatch({type: 'SET_INPUT', payload: value})
        }
    })
)(Ipnat);