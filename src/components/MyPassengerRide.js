import React from 'react'

const MyPassengerRide = ({ride}) => {
    return(
        <div className="MyPassengerRide">
            <h3> My Passenger Ride</h3>
            <p>Appointment Type: {ride.appointment_type}</p>
            <p>Location From: {ride.location_from}</p>
            <p>Location To: {ride.location_to}</p>
            <p>Driver: {ride.driver_id}</p>
        </div>
    )
}

export default MyPassengerRide