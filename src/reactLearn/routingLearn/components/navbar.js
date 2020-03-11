import React from 'react';
import { Link, NavLink, withRouter, useLocation } from "react-router-dom";

const Navbar = ({history}) => {
    console.log(history);
    const location = useLocation();

    const urlka = new URL(window.location);
    console.log(urlka);

    console.log(urlka.searchParams.get('tolik'));

    return (
        <ul>
            {/*Link component doesn't refresh a page*/}
            <li><Link to='/'>main</Link></li>
            {/*NavLink works the same but it also adds an 'active' class to the a tag*/}
            <li><NavLink to='/about'>about</NavLink></li>
            <li><NavLink to='/about?tolik=chelik'>about but with query</NavLink></li>
            <li><NavLink to='/contacts'>contacts</NavLink></li>
        </ul>
    );
};
// adds history property to props
export default withRouter(Navbar);