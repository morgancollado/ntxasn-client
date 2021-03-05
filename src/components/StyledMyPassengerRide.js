import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const StyledMyPassengerRide = ({ride}) => {
    const date_time = moment(ride.attributes.date_time).format("dddd, MMMM Do YYYY, h:mm:ss a")

  const classes = useStyles();


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          My Passenger Ride
        </Typography>
        <Typography variant="h5" component="h2">
        Appointment Date and Time: {date_time}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Appointment Type: {ride.attributes.appointment_type}
        </Typography>
        <Typography variant="body2" component="p">
        Location From: {ride.attributes.location_from}
          <br />
          Location To: {ride.attributes.location_to}
        </Typography>
        <Typography variant="body2" component="p">
        Driver: {ride.attributes.driver ? ride.attributes.driver.name : "Your Driver information will appear here once a driver is assigned"} 
          <br />
          Phone Number: {ride.attributes.driver ? ride.attributes.driver.phone_number: "Your Driver information will appear here once a driver is assigned"}
        </Typography>
        <Typography variant="body2" component="p">
      
          Email: {ride.attributes.driver ? ride.attributes.driver.email : "Your Driver information will appear here once a driver is assigned"}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/rides/${ride.id}/edit`}>
        <Button size="small">Edit or cancel this ride</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default StyledMyPassengerRide