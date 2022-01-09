import React from 'react';
import { NavLink } from 'react-router-dom'
const Navigation = () =>{
    return( <nav>
        <ul>
            <li><NavLink activeStyle={{ color : "red"}} to="/">Home</NavLink></li>
            <li><NavLink activeStyle={{ color : "red"}} to="/aboutMe">About</NavLink></li>
            <li><NavLink activeStyle={{ color : "red"}} to="/contact">Contact</NavLink></li>
            <li><NavLink activeStyle={{ color : "red"}} to="/totalExperience">Experience</NavLink></li>
            </ul>
            </nav>);
}


export default Navigation;