import './App.css';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'

import RidesContainer from './containers/RidesContainer'
import { Route, withRouter, Switch} from 'react-router-dom'

import NewRideContainer from './containers/NewRideContainer'
import EditRideContainer from './containers/EditRideContainer';
import StyledHome from './components/StyledHome'
import StyledLoginForm from './components/StyledLoginForm'
import StyledSignUpForm from './components/StyledSignupForm'
import StyledNavBar from './components/StyledNavBar'


class App extends Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    
  }
  
  render(){
    const {loggedIn, rides} = this.props
    return (
      
      <div>
      { loggedIn ? <StyledNavBar user={this.props.loggedIn}location={this.props.location} history={this.props.history} /> : null}
      <Switch>
        <Route exact path='/welcome' component={StyledHome}/>
        <Route exact path='/about' component={StyledHome}/>
        <Route exact path='/login' component={StyledLoginForm}/>
        <Route exact path='/' render={()=> loggedIn ? <RidesContainer/> : <StyledHome/>} />
        <Route exact path='/signup' component={StyledSignUpForm}/>
        <Route exact path='/rides' component={RidesContainer}/>
        <Route exact path='/rides/new' component={NewRideContainer}/>
        <Route exact path='/rides/:id/edit' render={props =>{
          const ride = rides.find(ride => ride.id === props.match.params.id)
          return <EditRideContainer ride={ride} {...props}/>
          }
        }/>
      </Switch>
      
      </div>
      
    )
  } 
}

const mapStateToProps = state =>{ 
  if (state.currentUser === null){
    return ({
      loggedIn: !!state.currentUser
    })

    }else {
      return({
        loggedIn: state.currentUser,
        rides: state.currentUser.attributes.passenger_rides
      })
    }
  }

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
