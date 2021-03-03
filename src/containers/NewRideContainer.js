import React from 'react'
import {requestNewRide} from '../actions/newRideActions'
import {connect} from 'react-redux'
import TripForm from '../components/RideForm'

const NewRideContainer = ({history, requestNewRide}) => {
    
    const handleSubmit =( newRide)=> {
        debugger
        requestNewRide(newRide, history)
    }

    return (
        <div>
            <TripForm history={history} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect(null, {requestNewRide})(NewRideContainer)
