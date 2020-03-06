import React from 'react';
import { Link, NavLink, useRouteMatch, useParams, Switch, Route } from "react-router-dom";


const Topic = () => {
    let { topicId } = useParams();
    return (
        <div>{topicId}</div>
    )
};

const About = () => {

    const {path, url} = useRouteMatch();
console.log(path,url);
    return (
        <div>
            <h6>About</h6>
            <ul>
                <li><Link to={`${url}/some`}>some</Link></li>
                <li><Link to={`${url}/special`}>special</Link></li>
                <li><Link to={`${url}/staff`}>staff</Link></li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
};

export default About;