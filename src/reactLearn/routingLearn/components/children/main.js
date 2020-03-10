import React, {useState} from 'react';
import { Prompt } from 'react-router-dom'

const Vau = () => <div>vau</div>;
const Chikipuki = () => <div>Chikipuki</div>;

const Shtuka = {
    Vau,
    Chikipuki
};

const Main = () => {

    const [inputValue, setInputValue] = useState('');
    const [isBlocking, setIsBlocking] = useState(false);

    const inputHandler = (value) => {
        setIsBlocking(!!value);
        setInputValue(value);
    };

    return (
        <div className={'fade'}>
            <h6>main</h6>
            <form
                action=""
                onSubmit={event => {
                    event.preventDefault();
                    event.target.reset();
                    setIsBlocking(false);
                }}
            >
                <Prompt
                    when={isBlocking}
                    message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                    }
                />
            <input value={inputValue} type="text" onChange={event => inputHandler(event.target.value)}/>
            </form>
            <Shtuka.Vau />
            <Shtuka.Chikipuki />
        </div>
    );
};

export default Main;