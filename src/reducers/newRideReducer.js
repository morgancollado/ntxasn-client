const initialState = {
    date_time: '',
    location_to: '',
    location_from: '',
    appointment_type: ''
}

const newRideReducer = (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_NEW_RIDE_FORM": 
        return action.formData
        case "RESET_NEW_RIDE_FORM":
            return initialState
        default: 
            return state
    }
}

export default newRideReducer