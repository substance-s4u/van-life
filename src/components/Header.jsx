import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="header-wrapper container">
                <Link to="/">
                    <h1>#VANLIFE</h1>
                </Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
