import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand">COINS</span>
            <ul className="nav">
                <li className="nav-item" >
                    <NavLink to="/home" className="nav-link" activeClassName="active-route" exact>Home</NavLink>
                </li>
                <li className="nav-item" >
                <NavLink to="/coins" className="nav-link" activeClassName="active-route" exact>Coins</NavLink>
                </li>
                <li className="nav-item" >
                <NavLink to="/live" className="nav-link" activeClassName="active-route" exact>Live</NavLink>
                </li>
            </ul>


        </nav>
    );
}

export default Header;
