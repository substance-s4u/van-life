import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {
    const vanImg = useOutletContext().currentVan.imageUrl;
    return (
        <div className="host-details-info">
            <img src={vanImg} alt="alt" />
        </div>
    );
}

export default HostVanPhotos;
