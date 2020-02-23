import React, { Component } from 'react';

class ModifyingDocument extends Component {
    componentDidMount(){
        let div = document.createElement('div');
        div.className = 'alert alert-success';
        div.innerHTML = '<strong>From ModifyingDocument:</strong> <span>Вы прочитали это важное сообщение.</span>';


        let parentElem = document.querySelector('#ModifyingDocument');

        parentElem.appendChild(div);

        // создать копию узла
        let div2 = div.cloneNode(true);
        // копию можно подправить
        div2.querySelector('strong').innerHTML = 'Супер!';
        // вставим её после текущего сообщения
        div.parentNode.insertBefore(div2, div.nextSibling);



        let div3 = div.cloneNode(true);
        div3.querySelector('strong').innerHTML = 'Увагіє!';
        div3.querySelector('span').innerHTML = 'Ща удалюсь!';
        parentElem.appendChild(div3);
        setTimeout(() => {
            parentElem.removeChild(div3)
        }, 2500);

        let data = {
            'Рыбы': {
                'Форель': {},
                'Щука': {}
            },

            'Деревья': {
                'Хвойные': {
                    'Лиственница': {},
                    'Ель': {}
                },
                'Цветковые': {
                    'Берёза': {},
                    'Тополь': {}
                }
            }
        };

        const createTree = (container, datas) => {
            const recursionCreate = (item, containure) =>{
                for(let i in item){
                    let LI = document.createElement('li');
                    if (Object.keys(item[i]).length !== 0){
                        const UL = document.createElement('ul');
                        containure.appendChild(LI);
                        LI.appendChild(UL);
                        console.log(LI);
                        UL.innerHTML = i;
                        recursionCreate(item[i], UL)
                    }else{
                        LI.innerHTML = i;
                        containure.appendChild(LI);
                        console.log(LI)
                    }
                }
            };
            recursionCreate(datas, container)
        };

        const container = document.getElementById('container');
        createTree(container, data);

        const container2 = document.getElementById('container2');
        const li5 = container2.children[2];

        li5.insertAdjacentHTML('beforebegin', '<li>3</li><li>4</li>');

        const container3 = document.getElementById('container3');
        const liApp = document.createElement('li');
        liApp.innerHTML = `I'm appended with node.append()`;
        const liPrep = document.createElement('li');
        liPrep.innerHTML = `I'm prepended with node.prepend()`;
        container3.append(liApp);
        container3.prepend(liPrep);
    }
    render() {
        return (
            <div id={'ModifyingDocument'}>
                <a id={'shouldContain'} className='App-link' href='https://learn.javascript.ru/modifying-document'>modifying-document</a>
                <ul id='container'>

                </ul>
                <a className='App-link' href='https://learn.javascript.ru/multi-insert'>multi-insert</a>
                <ul id='container2' >
                    <li>1</li>
                    <li>3</li>
                    <li>5</li>
                </ul>

                <ul id='container3' >
                    <li>startovaya LIshka</li>
                </ul>
            </div>
        );
    }
}

export default ModifyingDocument;