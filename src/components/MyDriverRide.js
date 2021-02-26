import React from 'react'

const MyDriverRide = ({ride}) => {
    return(
        <div className="MyDriverRide">
            <h3> My Driver Ride</h3>
            <p>Appointment Type: {ride.appointment_type}</p>
            <p>Location From: {ride.location_from}</p>
            <p>Location To: {ride.location_to}</p>
            <p>Passenger: {ride.passenger_id}</p>
        </div>
    )
}

export default MyDriverRide