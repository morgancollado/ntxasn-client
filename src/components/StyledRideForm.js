import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {updateNewRideForm} from '../actions/newRideActions'
import {connect} from 'react-redux'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        NTXASN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StyledRideForm =({newRide, updateNewRideForm, handleSubmit, editMode}) => {
  const classes = useStyles();

  const handleChange = (event) =>{
    const {name, value } = event.target
    const updatedFormInfo = {
        ...newRide,
        [name]: value
    }
    updateNewRideForm(updatedFormInfo)
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalTaxiIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          { editMode ?  "Edit Ride": "Request a New Ride" }
        </Typography>
        <form className={classes.form} noValidate onSubmit={event => {
            event.preventDefault()
            handleSubmit(newRide)
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                
                inputVariant="outlined"
                value={newRide.date_time}
                onChange={handleChange}
                name="date_time"
                type="datetime-local"
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Appointment Type"
                name="appointment_type"
                autoComplete="appointment_type"
                onChange={handleChange}
                value={newRide.appointment_type}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Location To"
                name="location_to"
                autoComplete="location_to"
                onChange={handleChange}
                value={newRide.location_to}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="location_from"
                label="Location From"
                type="text"
                id="location_from"
                onChange={handleChange}
                value={newRide.location_from}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value={editMode ? "Update Ride" : "Request Ride"}
          >
              {editMode ? "Update Ride" : "Request Ride"}
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) =>{
    return {newRide: state.newRide}
}


export default connect(mapStateToProps, {updateNewRideForm})(StyledRideForm)