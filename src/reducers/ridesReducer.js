const ridesReducer = (state = [], action) => {
    switch (action.type){
        case "SET_MY_RIDES":
            return action.rides
        default: 
            return state
    }
}
export default ridesReducer
