import React, {useEffect} from 'react';

const SizeAndScroll = () => {

    useEffect(() => {
       const buttonBy = document.querySelector('#button1');
       const scrollByMy = (value) => {
           window.scrollBy(0, -value)
       };
       const scrollByMyAuto = () => {
           const fraction = window.pageYOffset / 100;
         let scrollInterval = setInterval(() => {
             if (window.pageYOffset <= 0) clearInterval(scrollInterval)
             scrollByMy(fraction)
         }, 1)
       };
        buttonBy.onclick = scrollByMyAuto



        const buttonToTop = document.querySelector('#button3');
        const buttonToBottom = document.querySelector('#button4');
        const cubes = document.querySelectorAll('.cube');
        let selectedCube = 0;
        cubes.forEach((cube, i) => {
            cube.onclick = () => {selectedCube = i}
        });
        const scrollToViewMy = what => {
            what === false ? cubes[selectedCube].scrollIntoView(false) : cubes[selectedCube].scrollIntoView()
        };
        buttonToTop.onclick = scrollToViewMy;
        buttonToBottom.onclick = () => {scrollToViewMy(false)}
    });

    return (
        <div id={'SizeAndScroll'}>
            <a id={'shouldContain'} className='App-link' href="https://javascript.info/size-and-scroll-window">size-and-scroll-window</a>
            <div id="controlls">
                <button id={'button1'}>by</button>
                <button id={'button2'}>to</button>
                <button id={'button3'}>intoView()</button>
                <button id={'button4'}>intoViewFalse</button>
            </div>
            <div className="cube">1</div>
            <div className="cube">2</div>
            <div className="cube">3</div>
            <div className="cube">4</div>
        </div>
    );
};

export default SizeAndScroll;