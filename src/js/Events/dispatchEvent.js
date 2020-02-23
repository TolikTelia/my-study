import React, {useRef, useEffect} from 'react';

const DispatchEvent = () => {

    const ok = useRef(null);

    useEffect(() => {
        ok.current.onclick = (e) => {
            e.target.style.backgroundColor = 'red'
        };
        let disContext = new Event('click');
        setTimeout(()=>{ok.current.dispatchEvent(disContext)}, 2000);
        let discustom = new CustomEvent('haiii', {detail: {name: 'Stitch'}});
        ok.current.addEventListener('haiii', e => {
            console.log(e.detail.name)
        });
        ok.current.dispatchEvent(discustom)
    });



    return (
        <div className="cube" ref={ok}>
            context menu
        </div>
    );
};

export default DispatchEvent;