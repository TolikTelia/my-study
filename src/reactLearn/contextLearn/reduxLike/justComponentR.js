import React, {useContext} from 'react';
import { Context, connect } from "./store/store";
import Butna from './elements/butna'
import Ipnat from './elements/ipnat'

const JustComponentR = ({value, incrementValue, input, setInput}) => {

    return (
        <div>
            <h1>redux like</h1>
            <Butna />
            <Ipnat />
        </div>
    );
};

export default JustComponentR