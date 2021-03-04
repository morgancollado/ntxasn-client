import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from 'react-redux'
import Logout from './Logout'
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledNavBar =(props)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink exact activeClassName="active" to='/rides'>My Rides</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink exact activeClassName="active" to='/rides/new'>Request Ride</NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          Hello, {props.user.attributes.name}
          </Typography>
          {props.currentUser ? <Logout history={props.history}/>: null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = state => {
    return {
      currentUser: state.currentUser 
    }
  }

export default connect(mapStateToProps)(StyledNavBar) 
