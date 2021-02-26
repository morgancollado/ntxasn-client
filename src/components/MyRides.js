import React from 'react'
import {connect} from 'react-redux'
import MyRide from './MyRide'


const MyRides = (props) => {
     console.log(props)
     const passengerRides = props.passengerRides.length > 0 ? props.passengerRides.map(r => <MyRide ride={r} key={r.id}/>) : null
     
     const driverRides = props.driverRides.length > 0 ? props.driverRides.map(r => <MyRide ride={r} key={r.id}/>) : null
    return( 
        <div className="MyRides">
             {passengerRides.length > 0 ? passengerRides: null}
             {driverRides.length > 0 ? driverRides :null}
             <p></p>
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return {
        passengerRides: state.currentUser.attributes.passenger_rides,
        driverRides: state.currentUser.attributes.driver_rides
    }
}

export default  connect(mapStateToProps)(MyRides)