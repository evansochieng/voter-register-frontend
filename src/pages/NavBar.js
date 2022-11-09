import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return(
        <nav className='nav' >
            <NavLink className="home" exact to="/" >Home</NavLink>
            <ul>

            <li><NavLink to="/registration" >Registration</NavLink></li>
            <li><NavLink to="/voters">Voters</NavLink></li>
            </ul>
       </nav>
    )
}



export default NavBar;