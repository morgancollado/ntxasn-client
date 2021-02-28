import React from 'react'
import moment from 'moment'

const MyDriverRide = ({ride}) => {
    const date_time = moment(ride.attributes.date_time).format("dddd, MMMM Do YYYY, h:mm:ss a")
    return(
        <div className="MyDriverRide">
            <h3> My Driver Ride</h3>
            <p>Appointment Date and Time: {date_time}</p>
            <p>Appointment Type: {ride.attributes.appointment_type}</p>
            <p>Location From: {ride.attributes.location_from}</p>
            <p>Location To: {ride.attributes.location_to}</p>
            <p>Passenger: {ride.attributes.passenger.name}</p>
            <ul>
                <li> Phone Number: {ride.attributes.passenger.phone_number}  </li>
                <li>Email: {ride.attributes.passenger.email}</li>
            </ul>
        </div>
    )
}

export default MyDriverRide