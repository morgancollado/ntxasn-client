import React from 'react'
import {connect} from 'react-redux'

import StyledMyPassengerRide from './StyledMyPassengerRide'


const MyRides = (props) => {
     console.log(props)

     const allRides = props.passengerRides.concat(props.requestedRides)
     console.log(allRides)

     const renderAllRides = allRides.map((r => <StyledMyPassengerRide ride={r} key={r.id}/>))
     const passengerRides = props.passengerRides.length > 0 ? props.passengerRides.map(r => <StyledMyPassengerRide ride={r} key={r.id}/>) : []
     
      const requestedRides = props.requestedRides.length > 0 ? props.requestedRides.map(r => <StyledMyPassengerRide ride={r} key={r.id}/>) : []
    return( 
        <div className="MyRides">
             {renderAllRides}
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return {
        passengerRides: state.currentUser.attributes.passenger_rides,
        driverRides: state.currentUser.attributes.driver_rides,
        requestedRides: state.rides
    }
}

export default  connect(mapStateToProps)(MyRides)