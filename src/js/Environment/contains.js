import React, { Component } from 'react';

class Contains extends Component {
    componentDidMount(){
        const wrapper = document.querySelector('#contains-wrapper');
        const ssilka = document.querySelector('#shouldContain');
        console.log(wrapper);
        console.log(ssilka);
        console.log(wrapper.contains(ssilka));
    }
    render() {
        return (
            <div id={'contains-wrapper'}>
                <a id={'shouldContain'} className='App-link' href="https://learn.javascript.ru/compare-document-position">compare-document-position</a>
            </div>
        );
    }
}

export default Contains;