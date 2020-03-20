import React, {useContext} from 'react';
import { useObserver, observer } from 'mobx-react'
import {Context} from "../store";

const Bugslist = () => {
    const store = useContext(Context);

    return (
        <ul>
            {store.bugs.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    );
};

export default observer(Bugslist);