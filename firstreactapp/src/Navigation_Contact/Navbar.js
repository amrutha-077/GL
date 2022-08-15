import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar=()=>{
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add'>Add Contacts</NavLink>
        </nav>
    )
}
export default Navbar