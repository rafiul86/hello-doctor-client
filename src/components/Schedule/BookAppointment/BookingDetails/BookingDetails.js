import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';



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
const BookingDetails = ({bookingInfo ,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    const classes = useStyles();
    return (
        <div className="text-center justify-content-center">
          <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" color="primary" component="h2">
         { bookingInfo.treatment}
        </Typography>
        <Typography variant="body2" component="p">
          {bookingInfo.time}
        </Typography>
        <Button variant="contained" onClick={openModal} className="p-4 mt-1 mb-1" color="primary">Book Now</Button>
        <AppointmentForm date={date} modalIsOpen={modalIsOpen} appointmentOn={bookingInfo.treatment} openModal={openModal} closeModal={closeModal}></AppointmentForm>
        <Typography className={classes.pos} color="textSecondary">
          {bookingInfo.space}
        </Typography>
      </CardContent>
    </Card>  
        </div>
    );
};

export default BookingDetails;