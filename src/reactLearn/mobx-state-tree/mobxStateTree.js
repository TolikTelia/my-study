import React from 'react';
import store from './store'
import { observer } from 'mobx-react';

const MobxStateTree = () => {
    const {
        counter,
        prev,
        next,
        increment,
        decrement,
        snapshotsCount,
    } = store;

    return (
        <div>
            <p>sanpshots {snapshotsCount}</p>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
            <h6>{counter}</h6>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default observer(MobxStateTree);