import React from 'react';

const KeyBoardEvents = () => {

    let set = new Set();

    const runOnKeys = (func, ...keys) => {
        const yeap = keys.every(key => {
            console.log(set);
           return set.has(key)
        });
        // console.log(yeap)
        if (yeap) {
            func()
        }
    };

    document.addEventListener('keydown', (e) => {

        set.add(e.code);

        runOnKeys(
            () => {alert(42)}, 'KeyR', 'KeyF'
            )
    });

    document.addEventListener('keyup', (e) => {
        set.delete(e.code);
    });

    return (
        <div onKeyDown={runOnKeys}>
2
        </div>
    );
};

export default KeyBoardEvents;