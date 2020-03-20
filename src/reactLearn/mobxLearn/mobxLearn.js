import React, {useContext} from 'react';
import {Context, provider} from './store'

import Bugslist from "./components/bugslist";
import BugsForm from './components/bugsForm'

const MobxLearn = () => {
    const store = useContext(Context);
    return (
        <div>
            <h1>Mobx-learn</h1>
            <Bugslist />
            <BugsForm />
        </div>
    );
};

export default provider(MobxLearn);