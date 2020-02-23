import React, {useRef,useEffect} from 'react';

const SelectionRange = () => {

    const someRef = useRef(null);

    useEffect(() => {
        const range = new Range();
        const txte = someRef.current

        console.log(txte.firstChild)
    });

    return (
        <div ref={someRef}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            At aut <b>commodi consequatur</b> deserunt doloremque, eaque earum explicabo,
            illum magnam <i>nobis quasi</i> quis saepe, tempore? Accusantium aut consequatur
            excepturi repellendus vero!
        </div>
    );
};

export default SelectionRange;