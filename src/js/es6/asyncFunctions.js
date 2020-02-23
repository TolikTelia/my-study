import React, { Component } from 'react';

class AsyncFunctions extends Component {
    render() {
        function firstFunction() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve (1);
                    console.log('1');
                }, 1000);
            });
        }

        function secondFunction() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve (2);
                    console.log('2');
                }, 1000);
            });
        }

        async function main() {
            let x = await firstFunction();
            let y = await secondFunction();
            return x + y
        }

        main().then(z => console.log(z));

        return (
            <div>
                <a className='App-link' href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/async_function">AsyncFunctions</a>
            </div>
        );
    }
}

export default AsyncFunctions;