import React, {useEffect} from 'react';
import store from './store'
import anotherStore from './referencesStore'
import { observer } from 'mobx-react';

const ChildComponent = observer(() => {
    if (typeof anotherStore.fnuceton === 'function') {
        anotherStore.fnuceton()
    }

    return (
        <div>I'm a child)0))</div>
    )
});

const MobxStateTree = () => {
    const {
        counter,
        prev,
        next,
        increment,
        decrement,
        snapshotsCount,
    } = store;

    console.dir(anotherStore.selectedItem);
    useEffect(() => {
        anotherStore.setFnuceton(() => {
            console.log(1);
        })
    }, []);
    return (
        <div>
            <p>sanpshots {snapshotsCount}</p>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
            <h6>{counter}</h6>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <ul>
                {anotherStore.versions.map(item => (
                    <li onClick={() => {
                        anotherStore.setSelected(item.id)
                    }}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <ChildComponent />
        </div>
    );
};

export default observer(MobxStateTree);