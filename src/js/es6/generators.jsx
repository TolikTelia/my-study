import React, { Component } from 'react';

class Generators extends Component {
    render() {
        function * generate() {
            console.log('start');
            // let some = yield 165;
            // console.log(some);
            yield 1;
            yield 2;
            yield 3;
        }

        let iterator = generate();

        // console.log(iterator.next().value);
        // iterator.next(2);

        for (let some of iterator){
            console.log(some);
        }

        return (
            <div>
                <a className='App-link' href="https://learn.javascript.ru/generator">generators</a>
            </div>
        );
    }
}

export default Generators;