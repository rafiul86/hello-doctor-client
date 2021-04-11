import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonBase, Icon } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
const BlogDetails = ({blog}) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <Typography gutterBottom variant="h4" component="h2">
           {blog.title}
          </Typography >
            <Typography className="ms-5" variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
      <CardActionArea>
        <img src={blog.img} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {blog.writer}
          </Typography>
          {blog.location}
        </CardContent>
        <p>{blog.date}</p>
      </CardActionArea>
      <Button
        variant="contained"
        color="primary"
      >Read More>>>>
      </Button>
    </Card>

    );
};

export default BlogDetails;
