import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header-wrapper container">
                <Link to="/">
                    <h1>#VANLIFE</h1>
                </Link>
                <nav>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : null
                        }
                        to="/host"
                    >
                        Host
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : null
                        }
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : null
                        }
                        to="/vans"
                    >
                        Vans
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
