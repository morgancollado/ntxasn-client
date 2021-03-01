import React from 'react'
import moment from 'moment'

const MyPassengerRide = ({ride}) => {
    const date_time = moment(ride.attributes.date_time).format("dddd, MMMM Do YYYY, h:mm:ss a")
    return(
        <div className="MyPassengerRide">
            <h3> My Passenger Ride</h3>
            <p>Appointment Date and Time: {date_time} </p>
            <p>Appointment Type: {ride.attributes.appointment_type}</p>
            <p>Location From: {ride.attributes.location_from}</p>
            <p>Location To: {ride.attributes.location_to}</p>
            <p>Driver: {ride.attributes.driver ? ride.attributes.driver.name : "Your Driver information will appear here once a driver is assigned"} </p>
                <ul>
                    <li>Phone Number: {ride.attributes.driver ? ride.attributes.driver.phone_number: "Your Driver information will appear here once a driver is assigned"} </li>
                    <li>Email: {ride.attributes.driver ? ride.attributes.driver.email : "Your Driver information will appear here once a driver is assigned"}</li>
                </ul>
        </div>
    )
}

export default MyPassengerRide