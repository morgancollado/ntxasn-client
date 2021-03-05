import React from 'react'
import {updateRide, resetNewRideForm, cancelRide} from '../actions/newRideActions'
import {setEditForm} from '../actions/rideActions'
import {connect} from 'react-redux'
import TripForm from '../components/RideForm'
import StyledRideForm from '../components/StyledRideForm'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'


class EditRideContainer extends React.Component {


    componentDidMount(){
       this.props.ride && this.props.setEditForm(this.props.ride.attributes)
    }

    componentDidUpdate(prevProps) {
        this.props.ride && !prevProps.ride && this.props.setEditForm(this.props.ride.attributes)
    }

    componentWillUnmount(){
        this.props.resetNewRideForm()
    }
    
     handleSubmit =( newRide )=> {
         const { updateRide, ride, history} = this.props
        
        updateRide({
            ...newRide,
            rideId: ride.id
        }, history)
    }
    
    render() { 
        const rideId = this.props.ride ? this.props.ride.id : null 
    return (
        <div>
            <StyledRideForm editMode history={this.props.history} handleSubmit={this.handleSubmit}/>
            <br/>
            <div>
            <Button id="center"color="secondary" variant="contained" onClick={() => this.props.cancelRide(rideId, this.props.history)}>Cancel this ride</Button>
            </div>
        </div>

    )
    }
}

export default connect(null, {updateRide, setEditForm, resetNewRideForm, cancelRide})(EditRideContainer)
