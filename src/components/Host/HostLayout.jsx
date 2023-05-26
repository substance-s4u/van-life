import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HostLayout() {
    return (
        <div>
            <nav className="host-nav">
                <NavLink
                    end
                    className={({ isActive }) =>
                        isActive ? 'active-link' : null
                    }
                    to="/host"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'active-link' : null
                    }
                    to="incomes"
                >
                    Incomes
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'active-link' : null
                    }
                    to="vans"
                >
                    Vans
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? 'active-link' : null
                    }
                    to="reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default HostLayout;
