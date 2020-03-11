import React from 'react';
import { Route, useLocation, Switch } from "react-router-dom";
import Main from "./children/main";
import Contacts from "./children/contacts";
import About from "./children/about";
import Other from "./children/other";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

const SwitchComponent = () => {

    // let location = useLocation();

    return (
        <>
        {/*<TransitionGroup>*/}
            {/*<CSSTransition*/}
                {/*key={location.key}*/}
                {/*classNames="fade"*/}
                {/*timeout={300}*/}
            {/*>*/}
                <Switch>
                    <Route path='/contacts' component={Contacts}/>
                    <Route path='/about' component={About}/>
                    <Route path='/' component={Main}/>
                    <Route component={Other}/>
                </Switch>
             {/*</CSSTransition>*/}
        {/*</TransitionGroup>*/}
        </>
    );
};

export default SwitchComponent;