const ridesReducer = (state = [], action) => {
    switch (action.type){
        case "SET_MY_RIDES":
            return action.rides
        case "ADD_RIDE":
            return state.concat(action.ride)
        default: 
            return state
    }
}
export default ridesReducer
