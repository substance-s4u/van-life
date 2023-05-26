import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanDetail(props) {
    

    const {name, type, description} = useOutletContext().currentVan
    
    
  return (
    <div className="host-details-info">
    <p>
        <b>Name:</b> {name}
    </p>
    <p>
        <b>Category:</b> {type}
    </p>
    <p>
        <b>Description:</b> {description}
    </p>
    <p>
        <b>Visibility:</b> TODO
    </p>
</div>
  )
}

export default HostVanDetail