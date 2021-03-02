const ridesReducer = (state = [], action) => {
    switch (action.type){
        case "SET_MY_RIDES":
            return action.rides
        case "ADD_RIDE":
            return state.concat(action.ride)
        case "UPDATE_RIDE":
            return state.map(ride => ride.id === action.ride.id ? action.ride : ride)
        default: 
            return state
    }
}
export default ridesReducer
