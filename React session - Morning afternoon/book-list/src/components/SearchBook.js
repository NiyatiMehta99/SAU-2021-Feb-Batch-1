import React from 'react';
import {Link} from 'react-router-dom';
import books from '../books';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Header from './Header';

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
    media: {
        height: 140,
      },
  });

export default function List(props)
{
    //console.log(props.search.genre);
    const classes = useStyles();

  return (
    <>
    <Card className={classes.root} style={{width:"400px",margin:"20px",boxShadow:"tomato 0 0 10px"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.search.genre}
          
        </Typography>
        <Typography variant="h5" component="h2">
          {props.search.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.search.author}
          
        </Typography>
        <Typography variant="body2" component="p">
          {props.search.desc}
          
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small">Price: {props.search.price}</Button>
      </CardActions>
    </Card>
    </>
  );
}
