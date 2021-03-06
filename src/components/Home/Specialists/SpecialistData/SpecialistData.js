import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const SpecialistData = ({doctor}) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            
      <CardActionArea>
      
        <img className="img-fluid" src={`http://localhost:5000/${doctor.img}`} alt=""/>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {doctor.name}
          </Typography>
          {doctor.email}
        </CardContent>
      </CardActionArea>
    </Card>
    );
};

export default SpecialistData;
