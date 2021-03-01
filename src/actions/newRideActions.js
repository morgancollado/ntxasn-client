export const updateNewRideForm = formData =>{
    return {
        type: "UPDATE_NEW_RIDE_FORM",
        formData: formData
    }
}

export const addRide = ride => {
    return {
        type: "ADD_RIDE",
        ride: ride
    }
}

export const resetNewRideForm = () => {
    return {
        type: "RESET_NEW_RIDE_FORM"
    }
}

export const requestNewRide = (rideData, history) => {
    return dispatch => {
        const info = {
            ride: rideData
        }
        return fetch('http://localhost:3000/api/v1/rides', {
            credentials: "include",
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        })
        .then(r => r.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            } else {
                dispatch(addRide(resp.data))
                dispatch(resetNewRideForm())
                history.push('/')
            }
        })

    }
}