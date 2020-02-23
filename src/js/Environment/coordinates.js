import React, {useEffect} from 'react';

const Coordinates = () => {

    useEffect(() => {
        const cubicke = document.querySelector('.cube');
        window.onscroll = () => {
            if (cubicke.getBoundingClientRect().top - window.innerHeight / 2 <= 0) {
                cubicke.classList.add('cube--bigger');
            }else {
                cubicke.classList.remove('cube--bigger');
            }
        }
    });

    return (
        <div id={'coordinates-container-learn-id'}>
            <a id={'shouldContain'} className='App-link' href="https://javascript.info/coordinates">coordinates</a>
            <hr id={'tuts-tudats'}/>
            <div className="cube">1</div>
        </div>
    );
};

export default Coordinates;