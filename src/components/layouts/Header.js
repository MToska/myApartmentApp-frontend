import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container" style={{ marginRight: 0, marginLeft: 0,}}>
                    <Link to="/" className="navbar-brand">
                        My Apartment Application
                        </Link>
                    <ul className="navbar-nav" style={{ flexDirection: 'row', width: '30%'}}>
                        <li className="nav-item" style={{ marginLeft: '1em' }}>
                            <NavLink to="/register" className="nav-link">
                                Register
                                </NavLink>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '1em' }}>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </li>
                    </ul>


                </div>
            </nav>
        </header>

    )
}

export default Header;