import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import Navbar from './components/navbar'
import Main from './components/main'
import Contacts from './components/contacts'
import About from './components/about'
import Other from './components/other'


const RoutingLearn = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route  path='/about' component={About}/>
                    <Route component={Other}/>
                </Switch>
            </div>
        </Router>
    );
};

export default RoutingLearn;