import { Grid } from '@material-ui/core';
import React from 'react';
import BookingDetails from './BookingDetails/BookingDetails';

const BookAppointment = ({selectedDate}) => {
    const bookingInfos = [{
        treatment : "Dental Surgery",
        time : "8.00 - 10.00 AM",
        space : "8 space available",
        id : "1"
    },
    {
        treatment : "Dental Filling",
        time : "8.00 - 10.00 AM",
        space : "8 space available",
        id : "2"
    },
    {
        treatment : "Flouride Treatment",
        time : "8.00 - 10.00 AM",
        space : "8 space available",
        id : "3"
    },
    {
        treatment : "Plaque Removing",
        time : "8.00 - 10.00 AM",
        space : "8 space available",
        id : "4"
    },
    {
        treatment : "Maxilofacial Surgery ",
        time : "8.00 - 10.00 AM",
        space : "8 space available",
        id : "5"
    },
    {
        treatment : "Oral Surgery",
        time : "8.00 - 10.00 AM",
        space : "8 space available",
        id : "6"
    }]
    return (
        <div >
            <div>
            <h1 className="text-center mt-5">Available Schedule on {selectedDate.toDateString()}</h1>
            </div>
            <div>
                <Grid container spacing={10}>
                {
                    bookingInfos.map(bookingInfo => <Grid item xs={10} md={6} lg={4}><BookingDetails date={selectedDate} key={bookingInfos.id} bookingInfo={bookingInfo} ></BookingDetails></Grid>)
                }
                </Grid>
            </div>
        </div>
    );
};

export default BookAppointment;