import React, {useContext} from 'react';
import MSTComponent from './mobxStateTreeLike/justComponent'
import ReduxComponent from './reduxLike/justComponentR'

const ContextLearn = () => {
    return (
        <>
            <MSTComponent />
            <ReduxComponent />
        </>
    )
};

export default ContextLearn;


