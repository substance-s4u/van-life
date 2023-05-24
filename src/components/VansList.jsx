import React from 'react';
import { Link } from 'react-router-dom';
function VansList() {
    const [vans, setVans] = React.useState([]);

    // function createVan(data) {
    //     return {
    //         id: data.id,
    //         description: data.description,
    //         img: data.imageUrl,
    //         name: data.name,
    //         price: data.price,
    //         type: data.type,
    //     };
    // }

    React.useEffect(() => {
        fetch('/api/vans')
            .then((response) => response.json())
            .then((data) => setVans(data.vans));
    }, []);

    const vanElement = vans.map((van) => (
        <div key={van.id} className="van-wrapper">
            <Link to={`./${van.id}`}>
            <img className="van-img" src={van.imageUrl} alt="img" />
            <div className="van-info">
                <h4>{van.name}</h4>
                <p>
                    ${van.price} <br />
                    /day
                </p>
            </div>
            <button>
                
                    {van.type}
                
            </button>
            </Link>
        </div>
    ));

    return (
        <>
            <div className="van-nav container">
                <h3>Explore our van options</h3>
                <nav>
                    <Link to="">
                        <button>Simple</button>
                    </Link>
                    <Link to="">
                        <button>Luxury</button>
                    </Link>
                    <Link to="">
                        <button>Rugged</button>
                    </Link>
                    <p>Clear filters</p>
                </nav>
            </div>
            <div className="vans-list container">{vanElement}</div>
        </>
    );
}

export default VansList;
