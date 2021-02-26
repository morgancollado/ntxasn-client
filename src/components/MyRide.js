import React from 'react'

const MyRide = ({ride}) => {
    return(
        <div className="MyRide">
            <h3> My Ride</h3>
            <p>Appointment Type: {ride.appointment_type}</p>
            <p>Location From: {ride.location_from}</p>
            <p>Location To: {ride.location_to}</p>
            <p>Driver: {ride.driver_id}</p>
        </div>
    )
}

export default MyRide