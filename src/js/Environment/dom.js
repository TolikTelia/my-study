import React, { Component } from 'react';

class Dom extends Component {

    constructor(props) {
        super(props);
        this.secondSsilka = React.createRef();
    }

    componentDidMount() {
        this.secondSsilka.current.style.color = 'red'; // react way

        let element = document.getElementById('DomIdTest'); // native js way

        let ssilki = [...element.getElementsByTagName('a')]; // creates collection

        let ssilki2 = document.querySelectorAll('#DomIdTest a'); // creates array which is better
        console.dir(element.innerHTML);
        console.log(ssilki2);
        ssilki.map(ssilka => {
            ssilka.style.backgroundColor = 'white';
        });

        let shouldBeHidden = document.querySelector('#hiddenElement');
        shouldBeHidden.onclick = () => {
            shouldBeHidden.hidden = true;
        }
    }

    render() {




        return (
            <div id={'DomIdTest'} style={{display: 'flex', flexDirection: 'column'}}>
                <a className='App-link' href="https://learn.javascript.ru/dom-nodes">dom-nodes</a>
                <a ref={this.secondSsilka} className='App-link' href="https://learn.javascript.ru/dom-console">dom-console</a>
                <div id={'hiddenElement'}>click = hide me. hidden attribute</div>
            </div>
        );
    }
}

export default Dom;