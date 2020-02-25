import React, { useContext } from 'react';
import {Context, provider} from '../store/store'

const Butna = () => {
    const {incrementValue, value} = useContext(Context);
    console.log('butna');
    return (
        <button onClick={incrementValue}>{value}</button>
    );
};

export default provider(Butna);