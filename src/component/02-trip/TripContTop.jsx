import React from 'react'
import MoreBtn from '../../component/_common/MoreBtn'
import { NavLink } from 'react-router-dom'

function TripContTop({triplink, tripcontTitle, tripcontText}) {
  return (
    <NavLink to={triplink} className='trip-main-con-top' >
      <div className='trip-main-con-title'>
        <h3>{tripcontTitle}</h3>
        <span>{tripcontText}</span>
      </div>
      <MoreBtn/>
    </NavLink>
)
}

export default TripContTop