import React, { Component } from 'react';

class Metrix extends Component {
    componentDidMount() {
        const container = document.querySelector('#forMetrix');
        let scrollBottom = container.scrollHeight - container.scrollTop;
        container.onscroll = () => {console.log(container.scrollHeight - container.scrollTop - container.clientHeight)}
        container.onclick = () => {console.log(container.scrollWidth - container.clientWidth)}
    }

    render() {
        return (
            <div>
                <a className='App-link' href='https://learn.javascript.ru/metrics'>Metrix</a>

                <div id="forMetrix">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae commodi cum debitis dignissimos dolores eius eligendi excepturi expedita illum impedit itaque maxime, modi nobis non obcaecati placeat provident quaerat quam quasi qui repellendus sapiente ullam veritatis voluptates? A atque consectetur, consequuntur dicta distinctio dolorem dolorum exercitationem fuga illo incidunt iste iure labore laborum nam natus odio officiis pariatur placeat quaerat quam quas quasi quibusdam quidem quis quisquam quo quos reiciendis repellat sunt temporibus unde ut velit vero. Ab adipisci at cum dolore ea earum, eos eveniet itaque magni, obcaecati placeat, quidem rerum saepe sit tempora velit voluptate! A, blanditiis.
                </div>
            </div>
        );
    }
}

export default Metrix;