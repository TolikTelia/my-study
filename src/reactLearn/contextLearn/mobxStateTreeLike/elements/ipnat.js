import React, { useContext } from 'react';
import {Context, provider} from '../store/store'

const Ipnat = () => {
    const {input, setInput} = useContext(Context);
    console.log('input');
    return (
        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
    );
};

export default provider(Ipnat);