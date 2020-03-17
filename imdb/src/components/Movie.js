import React from 'react';
import { Link } from 'react-router-dom';
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
    maxWidth: 250,
    margin: 10
  }
});

const Movie = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link
          to={{
            pathname: `/movie/${props.id}`,
            state: {
              id: props.id
            }
          }}
        >
          <CardMedia
            component="img"
            alt={props.title}
            height="140"
            image={`https://image.tmdb.org/t/p/w500${props.poster}`}
            title={props.title}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"></Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button variant="contained" color="default">
          watch trailer
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
