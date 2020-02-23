import React, { Component } from 'react';

class PromiseLearning extends Component {

    componentDidMount() {
        let somePromise =  new Promise((resolve, reject) => {
            setTimeout(()=>{ Math.random() > .5 ? resolve({data: 42}) : reject('lol')}, 1000)
        });



        somePromise
            .then(data => {
                return JSON.stringify(data)
            })
            .then(json => {
                    console.log(json)
                }
            ).catch(error => console.error(error));


        ////////////
        // tipa fetch)

        function httpGet(url) {

            return new Promise(function(resolve, reject) {

                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, true);

                xhr.onload = function() {
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        var error = new Error(this.statusText);
                        error.code = this.status;
                        reject(error);
                    }
                };

                xhr.onerror = function() {
                    reject(new Error("Network Error"));
                };

                xhr.send();
            });

        }

        httpGet('https://api.github.com/users/TolikTelia')
        // 1. Получить данные о пользователе в JSON и передать дальше
            .then(response => {
                console.log(response);
                let user = JSON.parse(response);
                return user;
            })

        ////tasks////////

        // const delay = (ms) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(resolve, ms);
        //     })
        // };
        //
        // delay(1000).then(() => alert("Hello!"))


//             let urls = [
//                 'user.json',
//                 'guest.json'
//             ];
//
//         let results = [];
//
//         const tasker = (arr) => {
// arr.map((url) => {
//     return new Promise((resolve, reject) => {
//         httpGet(`https://learn.javascript.ru/article/promise/${url}`).then(result => {results.push(result)}).then(()=>{console.log(results)})
//
// })
//         }
// )}
//         tasker(urls)


    }




    render() {
        return (
            <div>
                <a className='App-link' href="https://learn.javascript.ru/promise">Promises</a>
            </div>
        );
    }
}

export default PromiseLearning;