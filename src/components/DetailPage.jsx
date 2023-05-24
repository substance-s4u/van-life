import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function DetailPage() {
    const params = useParams();

    const [van, setVan] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((response) => response.json())
            .then((data) => setVan(data.vans));
    }, [params]);

    return (
        <div className="detail-page">
            { van ? (

                
                <div className="detail-wrapper container">
                <Link to="/vans">&#8592; Back to all vans</Link>
                <div className="vans-detail">
                    <img src={van.imageUrl} alt="alt" />
                    <button className="van-type">{van.type}</button>
                    <h3>{van.name}</h3>
                    <h4>${van.price}/day</h4>
                    <p>{van.description}</p>
                    <button className="detail-rent">Rent this car</button>
                </div>
            </div>
                    ) : <h2>Loading...</h2>
            }
            
        </div>
    );
}

export default DetailPage;
