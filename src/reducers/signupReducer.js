const initalState = {
    name: '',
    email: '',
    phone_number: '',
    password: ''
}

const signupReducer = (state = initalState, action) => {
    switch (action.type){
        case "UPDATE_SIGNUP_FORM":
            return action.formData
        case "RESET_SIGNUP_FORM":
            return initalState
        default: 
            return state
    }
}

export default signupReducer