import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Main from './components/main'
import Contacts from './components/contacts'
import About from './components/about'
import Other from './components/other'


const RoutingLearn = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><a href='/'>main</a></li>
                    <li><a href='/about'>about</a></li>
                    <li><a href='/contacts'>contacts</a></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route exact path='/about' component={About}/>
                    <Route component={Other}/>
                </Switch>
            </div>
        </Router>
    );
};

export default RoutingLearn;