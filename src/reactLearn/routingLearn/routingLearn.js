import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Switch from './components/switch'
import Navbar from './components/navbar'

const RoutingLearn = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch />
            </div>
        </Router>
    );
};

export default RoutingLearn;