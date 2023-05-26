import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

function HostVansDetail() {
    const [currentVan, setCurrentVan] = React.useState([]);

    const { id } = useParams();

    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then((res) => res.json())
            .then((data) => setCurrentVan(data.vans));
    }, [id]);

    return (
        <div className="host-d">
            <Link to=".." relative="path">
                &#8592; Back to all vans
            </Link>

            <div className="host-details-wrapper">
                <div className="host-van-hero">
                    <img src={currentVan.imageUrl} alt="alt" />
                    <div>
                        <h2>{currentVan.name}</h2>
                        <h3>${currentVan.price}/day</h3>
                    </div>
                </div>
                <nav className="host-van-nav">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : null
                        }
                        to="."
                        end
                    >
                        Details
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : null
                        }
                        to="pricing"
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'active-link' : null
                        }
                        to="photos"
                    >
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={({currentVan})}/>
            </div>
        </div>
    );
}

export default HostVansDetail;
