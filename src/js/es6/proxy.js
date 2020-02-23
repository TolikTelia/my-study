import React, { Component } from 'react';

class ProxyLesson extends Component {
    render() {
        let someAbje = {
            name: 'Abje',
            why: 'because'
        };

        let proxy = new Proxy(someAbje, {
            get(target, prop) {
               if (prop === 'why') return `i won't tell you`;
               return target[prop];
           },
           set(target, prop, value, receiver) {
                if(prop === 'why') console.log('you cannot change reason');
                target[prop] = value;
                return true
           }
        });

        console.log(proxy.name);
        console.log(proxy.why);
        proxy.why = 'tell me!';

        return (
            <div>
                <a className='App-link' href="https://learn.javascript.ru/proxy">proxy</a>
            </div>
        );
    }
}

export default ProxyLesson;