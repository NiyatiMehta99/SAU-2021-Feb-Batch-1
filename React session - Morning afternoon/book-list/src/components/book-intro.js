import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 200,
    marginLeft: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  console.log("this is a simple card");
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ boxShadow: "tomato 0 0 5px" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.author}
        </Typography>
      </CardContent>
      <CardActions >
        <Button variant="contained"
          size="small"
          style={{
            backgroundColor: "white",
            color: "tomato",
            border: "tomato 0.5px solid",
            
          }}
        >
          <Link to={"/detail/" + props.id} style={{ color: "tomato" }}>
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
