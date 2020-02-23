import React, { Component } from 'react';

class Symbols extends Component {
    render() {
        // let sym = Symbol('name')
        // let sym2 = Symbol('name')
        // console.log(sym === sym2)

        let globalPassword = Symbol.for('password');
        console.log(Symbol.keyFor(globalPassword));

        return (
            <div>
                <a className='App-link' href="https://learn.javascript.ru/symbol">symbols</a>
            </div>
        );
    }
}

export default Symbols;