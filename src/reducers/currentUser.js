const currentUserReducer = (state = null, action) => {
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.user
        case "CLEAR_CURRENT_USER":
            return null
        case "UPDATE_RIDE": 
            {let passenger_rides = state.attributes.passenger_rides.map(ride => ride.id === action.ride.id ? action.ride : ride)
            return {
                ...state,
                attributes: {
                    ...state.attributes,
                    passenger_rides
                }
            }}
            case "CANCEL_RIDE":
                {let passenger_rides = state.attributes.passenger_rides.filter(ride => ride.id === action.rideId ? false : true)
                return {
                    ...state,
                    attributes: {
                        ...state.attributes,
                        passenger_rides
                    }
                }}
        default: 
            return state
    }
}

export default currentUserReducer