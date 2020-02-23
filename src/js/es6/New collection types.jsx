import React, { Component } from 'react';

class NewCollectionTypes extends Component {
    render() {
        let someg = new Map();
        someg.set(false, 'cheese');
        console.log(someg.get(false));
        someg.set(null, 'iceCream'); // omg null? works
        console.log(someg.get(null));


        let set = new Set();

        let vasya = {name: "Вася"};
        let petya = {name: "Петя"};
        let dasha = {name: "Даша"};

// посещения, некоторые пользователи заходят много раз
        set.add(vasya);
        set.add(petya);
        set.add(dasha);
        set.add(vasya);
        set.add(petya);

// set сохраняет только уникальные значения
        console.log( set.size ); // 3

        set.forEach( user => console.log(user.name ) ); // Вася, Петя, Даша

        return (
            <div>
                <a className='App-link' href="https://learn.javascript.ru/set-map">set-map</a>
            </div>
        );
    }
}

export default NewCollectionTypes;