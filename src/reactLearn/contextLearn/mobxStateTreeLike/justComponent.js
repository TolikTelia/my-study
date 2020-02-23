import React, {useContext} from 'react';
import { Context, provider } from "./store";

const JustComponent = () => {
    const store = useContext(Context);
    return (
        <div>
            <h1>mobx-state-tree like</h1>
            <button onClick={store.incrementValue}>{store.value}</button>
            <input type="text" value={store.input} onChange={(e) => {store.setInput(e.target.value)}}/>
        </div>
    );
};

export default provider(JustComponent);