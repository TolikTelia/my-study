import React, { Component } from 'react';

class Iterators extends Component {
    render() {
        let abjecti = {
            from: 1,
            to: 5
        };
        abjecti[Symbol.iterator] = function() {

            let current = this.from;
            let last = this.to;

            // метод должен вернуть объект с методом next()
            return {
                next() {
                    if (current <= last) {
                        return {
                            done: false,
                            value: current++
                        };
                    } else {
                        return {
                            done: true
                        };
                    }
                }

            }
        };

        for (let num of abjecti) {
            console.log(num); // 1, затем 2, 3, 4, 5
        }

        console.log('max:', Math.max(...abjecti) );
        // spread оператор використовує метод for...of як вбудований так і кастомний

        return (
            <div>
                <a className='App-link' href="https://learn.javascript.ru/iterator">iterators</a>
            </div>
        );
    }
}

export default Iterators;