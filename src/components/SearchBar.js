import React from 'react'
import {connect} from 'react-redux'
import StyledMyPassengerRide from './StyledMyPassengerRide'

class SearchBar extends React.Component { 
    
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    searchFunction = () => {
        const allRides = this.props.passengerRides.concat(this.props.requestedRides)

        const filteredRides = allRides.filter(r => r.attributes.location_to.includes(this.state.searchTerm))
        
        return filteredRides.map(r => <StyledMyPassengerRide ride={r} key={r.id}/>)
        
    }

    render(){
        return(
            <div>           
                <form>
                <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                </form>
                {this.searchFunction()}
            </div>
 
        )
    }


}

const mapStateToProps = (state) =>{
    
    return {
        passengerRides: state.currentUser.attributes.passenger_rides,
        driverRides: state.currentUser.attributes.driver_rides,
        requestedRides: state.rides
    }
}

export default connect(mapStateToProps)(SearchBar)