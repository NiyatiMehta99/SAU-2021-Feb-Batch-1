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
    var chosenid=props.match.params.id;
    var chosenbook=books.filter((book)=> {return book.id==chosenid});
    console.log(chosenbook);
    const classes = useStyles();

  return (
    <>
    <Header />
    <Card className={classes.root} style={{width:"400px",margin:"20px",boxShadow:"tomato 0 0 10px"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {chosenbook[0].genre}
        </Typography>
        <Typography variant="h5" component="h2">
          {chosenbook[0].title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {chosenbook[0].author}
        </Typography>
        <Typography variant="body2" component="p">
          {chosenbook[0].desc}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small">Price: {chosenbook[0].price}</Button>
      </CardActions>
    </Card>
    </>
  );
}
