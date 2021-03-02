import React from 'react'
import {updateRide} from '../actions/newRideActions'
import {setEditForm} from '../actions/rideActions'
import {connect} from 'react-redux'
import TripForm from '../components/RideForm'

class EditRideContainer extends React.Component {

    componentDidMount(){
       this.props.ride && this.props.setEditForm(this.props.ride.attributes)
    }

    componentDidUpdate(prevProps) {
        this.props.ride && !prevProps.ride && this.props.setEditForm(this.props.ride.attributes)
    }
    
     handleSubmit =( newRide )=> {
         const { updateRide, ride, history} = this.props
        
        updateRide({
            ...newRide,
            rideId: ride.id
        }, history)
    }
    render() {  
    return (
        <div>
            <TripForm editMode history={this.props.history} handleSubmit={this.handleSubmit}/>
        </div>
    )
    }
}

export default connect(null, {updateRide, setEditForm})(EditRideContainer)
