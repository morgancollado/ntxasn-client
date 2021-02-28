import React from 'react' 
import {updateNewRideForm} from '../actions/newRideActions'
import {connect} from 'react-redux'

 

const NewRideForm = ({newRide, updateNewRideForm, history}) =>{
    const handleChange = (event) =>{
        const {name, value } = event.target
        const updatedFormInfo = {
            ...newRide,
            [name]: value
        }
        updateNewRideForm(updatedFormInfo)
    }
    return (
        <form>
            <label for="date_time">Time and Date of Appointment</label>
            <input 
                name="date_time"
                type="datetime-local"
                onChange={handleChange}
                value={newRide.date_time}
            /> <br/>
            <input 
                placeholder="Location To"
                name="location_to"
                type="text"
                onChange={handleChange}
                value={newRide.location_to}
            /><br/>
            <input 
                placeholder="Location From"
                name="location_from"
                type="text"
                onChange={handleChange}
                value={newRide.location_from}
            /><br/>
            <input 
                placeholder="Appointment Type"
                name="appointment_type"
                type="text"
                onChange={handleChange}
                value={newRide.appointment_type}
            /><br/>
            <input type="submit" value="Request Ride"/>
        </form>
    )}

    
    const mapStateToProps = (state) =>{
        return {newRide: state.newRide}
    }


export default connect(mapStateToProps, {updateNewRideForm})(NewRideForm)