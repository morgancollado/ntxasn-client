import React from 'react'
import {requestNewRide} from '../actions/newRideActions'
import {connect} from 'react-redux'
import TripForm from '../components/RideForm'
import StyledRideForm from '../components/StyledRideForm'

const NewRideContainer = ({history, requestNewRide}) => {
    
    const handleSubmit =( newRide)=> {
        requestNewRide(newRide, history)
    }

    return (
        <div>
            <StyledRideForm history={history} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect(null, {requestNewRide})(NewRideContainer)
