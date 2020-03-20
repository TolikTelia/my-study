import React, {useContext, useState} from 'react';
import {Context} from '../store'

const BugsForm = () => {
    const store = useContext(Context);
    const [bugName, setBugName] = useState('');

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    store.addBug(bugName);
                    setBugName('');
                }}
            >
                <input
                    type="text"
                    value={bugName}
                    onChange={e => {
                        setBugName(e.target.value)
                    }}
                />
                <button type='submit'>add</button>
            </form>
        </div>
    );
};

export default BugsForm;