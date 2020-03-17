import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MovieContext } from './MovieContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const Movie = props => {
  const classes = useStyles();
  const { moviePoster, fetchMoviePoster } = useContext(MovieContext);

  useEffect(() => {
    fetchMoviePoster(
      `https://api.themoviedb.org/3/movie/${props.id}/images?api_key=b8bde3078effbb023405f158909c983c&append_to_response=videos,images`
    );
  }, [fetchMoviePoster, props.id]);

  console.log(moviePoster);

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
            image={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
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
