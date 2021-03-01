import React from 'react'
import {connect} from 'react-redux'
import MyPassengerRide from './MyPassengerRide'
import MyDriverRide from './MyDriverRide'


const MyRides = (props) => {
     console.log(props)
     const passengerRides = props.passengerRides.length > 0 ? props.passengerRides.map(r => <MyPassengerRide ride={r} key={r.id}/>) : null
     
     const driverRides = props.driverRides.length > 0 ? props.driverRides.map(r => <MyDriverRide ride={r} key={r.id}/>) : null

      const requestedRides = props.requestedRides.length > 0 ? props.requestedRides.map(r => <MyPassengerRide ride={r} key={r.id}/>) : []
    return( 
        <div className="MyRides">
             {passengerRides.length > 0 ? passengerRides: null}
             {requestedRides.length > 0 ? requestedRides : null}
             {driverRides.length > 0 ? driverRides :null}
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