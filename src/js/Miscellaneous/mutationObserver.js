import React, {useEffect, useRef, useState} from 'react';

const MutationObserverr = () => {

    const guy = useRef();

    const [toAdd, setYeap] = useState(false);

    useEffect(() => {
        let myObserver = new MutationObserver((mutations) => {
            console.log(mutations)
        });
        myObserver.observe(guy.current, {
            // childList: true, // required
            attributes: true, // required
            // characterData: true, // required

            subtree: true,
            // attributeFilter: true,
            // characterDataOldValue: true,
            // characterDataOldValue: true,
        })
    });

    return (
        <div id="guy" ref={guy}>
            Click and <b onClick={() => {guy.current.style.color = 'red'; setYeap(true)}}>edit</b>, please
            {toAdd && <div>ya radilsya</div>}
        </div>
    );
};

export default MutationObserverr;