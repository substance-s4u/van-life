import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {
    const vanPrice = useOutletContext().currentVan.price
  return (
    <div className="host-details-info">
        <p>${vanPrice}/day</p>
    </div>
  )
}

export default HostVanPricing