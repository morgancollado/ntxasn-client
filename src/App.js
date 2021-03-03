import './App.css';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import NavBar from './components/Navbar'
import RidesContainer from './containers/RidesContainer'
import { Route, withRouter, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Home from './components/Home'
import NewRideContainer from './containers/NewRideContainer'
import EditRideContainer from './containers/EditRideContainer';


class App extends Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    
  }
  
  render(){
    const {loggedIn, rides} = this.props
    return (
      
      <div>
      { loggedIn ? <NavBar user={this.props.loggedIn}location={this.props.location} history={this.props.history} /> : null}
      <Switch>
        <Route exact path='/welcome' component={Home}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/' render={()=> loggedIn ? <RidesContainer/> : <Home/>} />
        <Route exact path='/signup' component={SignUpForm}/>
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
