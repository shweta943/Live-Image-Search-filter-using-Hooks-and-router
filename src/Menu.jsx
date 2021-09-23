import React from "react";
import { NavLink } from "react-router-dom";


const Menu=()=>{
    return(
        <div className="class1">
        <NavLink exact to="/" className="class2" activeClassName="class3">Home</NavLink>
        <NavLink exact to="/service" className="class2" activeClassName="class3">Services</NavLink>
        <NavLink exact to="/search" className="class2" activeClassName="class3">Search</NavLink>
        <NavLink exact to="/about" className="class2" activeClassName="class3">About us</NavLink>
        <NavLink exact to="/contact" className="class2" activeClassName="class3">Contact us</NavLink>

        </div>
    );
}
export default Menu;