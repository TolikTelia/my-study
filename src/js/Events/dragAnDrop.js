import React, {useEffect, useRef} from 'react';

const DragAnDrop = () => {

    const lolkeck = useRef();

    useEffect(() => {
        lolkeck.current.onmousedown = e => {
            const ahah = lolkeck.current;

            let shiftX = e.clientX - ahah.getBoundingClientRect().left;
            let shiftY = e.clientY - ahah.getBoundingClientRect().top;
            ahah.style.position = 'absolute';
            ahah.style.zIndex = 1000;

            document.body.append(ahah);



            const moveAt = (pageX, pageY) => {
                ahah.style.left = pageX - shiftX + 'px';
                ahah.style.top = pageY - shiftY + 'px';
            };

            moveAt(e.pageX, e.pageY);

            const onMouseMove = (event) => {
                moveAt(event.pageX, event.pageY);
            };

            document.addEventListener('mousemove', onMouseMove);

            ahah.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                ahah.onmouseup = null;
            };

            ahah.ondragstart = function() {
                return false;
            };
        }
    });

    return (
        <div>
            <div className="cube" ref={lolkeck} style={{backgroundColor: 'red'}}/>
        </div>
    );
};

export default DragAnDrop;