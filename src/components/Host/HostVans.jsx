import React from 'react';
import { Link } from 'react-router-dom';

function HostVans() {
    const [vansList, setVansList] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/vans')
            .then((response) => response.json())
            .then((data) => setVansList(data.vans));
    }, []);

    const renderListedVans = vansList.map((van) => (
        <Link to={`${van.id}`} className="host-vans-wrapper" key={van.id}>
            <div className="host-van-list">
                <img src={van.imageUrl} alt="" />
                <p>
                    {van.name} <br /> <span>${van.price}/day</span>
                </p>
            </div>
        </Link>
    ));

    return (
        <div className="host">
            <h2 className="host-vans-title">Your listed vans</h2>
            {vansList.length > 0 ? (
              <section>
                {renderListedVans}
              </section>
            ) : (
              <h2>Loading...</h2>
            )}
        </div>
    );
}

export default HostVans;
