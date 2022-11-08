import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return(
        <nav >
            <NavLink  exact to="/" >Home</NavLink>
            <NavLink to="/registration" >Registration</NavLink>
            <NavLink to="/voters">Polling Staton</NavLink>
       </nav>
    )
}

export default NavBar;