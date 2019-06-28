import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand" style={{marginLeft:'1em'}}>
                        My Apartment Application
                        </Link>
                    <ul className="navbar-nav" style={{ flexDirection: 'row'}}>
                        <li className="nav-item" style={{ marginLeft: '1em' }}>
                            <NavLink to="/register" className="nav-link">
                                Rejestracja
                                </NavLink>
                        </li>
                        <li className="nav-item" style={{ marginLeft: '1em' }}>
                            <NavLink to="/login" className="nav-link">
                                Logowanie
                            </NavLink>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header;