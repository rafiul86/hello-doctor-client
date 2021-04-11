import { Grid } from '@material-ui/core';
import React from 'react';
import TestimonialDetails from './TestimonialDetails/TestimonialDetails';
import john from '../../../images/john.png';
import harry from '../../../images/harry.png';
import potter from '../../../images/potter.png'
const Testimonial = () => {

    const opinions =[{
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cumque aspernatur ducimus alias, vero dolorem.",
        name : "John",
        location : "Ohio",
        id : "1",
        img : john
    },
    {
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cumque aspernatur ducimus alias, vero dolorem.",
        name : "Harry",
        location : "Newyork",
        id : "2",
        img : harry
    },
    {
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At cumque aspernatur ducimus alias, vero dolorem.",
        name : "Potter",
        location : "California",
        id : "3",
        img : potter
    }]
    return (
        <section className="offset-md-2 align-items-center justify-content-center mt-5">
            <div>
                <h3 style={{color : "blue"}}>Testimonial</h3>
                <h1>What's our Patient <br/> Says</h1>
            </div>
            <Grid className=" offset-md-2 ms-5 mt-5" container spacing={8}>
                {
                    opinions.map(opinion=><Grid item ><TestimonialDetails opinion={opinion}></TestimonialDetails></Grid>)
                }
            </Grid>
        </section>
    );
};

export default Testimonial;