import { Grid } from '@material-ui/core';
import React from 'react';
import exception from '../../../images/exceptional.png'

const Exception = () => {
    return (
        <section className="offset-md-2">
           <Grid container spacing={8}>
               <Grid item xs={11} md={6} lg={4}>
                <img style={{borderRadius : "7px"}} className="img-fluid" src={exception} alt=""/>
               </Grid>
               <Grid item xs={11} md={6} lg={5}>
                   <h2>Exceptional Dental care, on your Terms</h2>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, alias repellat corporis dolorum, consectetur pariatur id in dolorem praesentium nobis laboriosam, recusandae ut fuga similique maiores numquam impedit ea magnam atque autem labore tempore eligendi modi! Aut repellat eaque laudantium nemo sint, totam consequuntur omnis sit adipisci? Tempora officiis enim in doloribus quaerat ipsum cupiditate possimus! Cupiditate culpa deleniti quos in perferendis vel exercitationem minus. Natus quo facere enim fugit soluta, a, quod laudantium delectus fuga mollitia iusto illum minima, obcaecati eaque repudiandae? Ratione, dignissimos, repudiandae, temporibus officia aut nam quia iste modi officiis illo incidunt. Mollitia ipsam animi doloribus magni aliquam, error, natus amet iusto nihil esse tempore necessitatibus, in nostrum officia distinctio</p>
                <button className="btn btn-primary">Learn More</button>
               </Grid>
           </Grid>
        </section>
    );
};

export default Exception;