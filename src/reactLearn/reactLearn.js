import React from 'react';
import ContextLearn from "./contextLearn/contextLearn";
import HooksLearn from './hooksLearn/hooksLearn.js'
import ReduxLearn from './reduxRoutingLearn/reduxLearn'
import RoutingLearn from './routingLearn/routingLearn'
import MobxLearn from "./mobxLearn/mobxLearn";
import MobxStateTree from "./mobx-state-tree/mobxStateTree";

const ReactLearn = () => {
    return (
        <div>
            <ContextLearn />
            <HooksLearn />
            <ReduxLearn />
            <RoutingLearn />
            <MobxLearn />
            <MobxStateTree />
        </div>
    );
};

export default ReactLearn;