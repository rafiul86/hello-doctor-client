import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



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
const BookingDetails = ({bookingInfo}) => {
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
        <Button variant="contained" className="p-4 mt-1 mb-1" color="primary">Book Now</Button>
        <Typography className={classes.pos} color="textSecondary">
          {bookingInfo.space}
        </Typography>
      </CardContent>
    </Card>  
        </div>
    );
};

export default BookingDetails;