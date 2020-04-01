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
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { MovieContext } from './MovieContext';
import { WatchListContext } from './WatchListContext';
import { message } from 'antd';
import Axios from 'axios';

const useCardStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 5
  },
  media: {
    height: 180
  }
});

const Movie = props => {
  const { moviesToWatch, setMoviesToWatch } = useContext(WatchListContext);
  const { movieVideo, setMovieVideo, setMovieDialogOpenStatus } = useContext(
    MovieContext
  );
  const cardClasses = useCardStyles();

  useEffect(() => {
    let watchbtn = document.getElementById(props.id);
    watchbtn.addEventListener('click', handleOpen);

    function handleOpen() {
      Axios.get(
        `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
      ).then(resp => {
        console.log(movieVideo);
        resp.data.results.length > 0
          ? setMovieVideo(resp.data.results[0].key)
          : setMovieVideo('unknown');
        setMovieDialogOpenStatus(true);
      });
    }
    return () => {
      watchbtn.removeEventListener('click', handleOpen);
    };
  }, [movieVideo, props.id, setMovieDialogOpenStatus, setMovieVideo]);

  const addMovieToWatchList = event => {
    if (moviesToWatch.filter(movie => movie.id === props.id).length === 0) {
      event.preventDefault();
      setMoviesToWatch([...moviesToWatch, { ...props.movie }]);
    } else {
      return message.warning('This movie is already in your watchlist!', 1);
    }
  };

  return (
    <React.Fragment>
      {/* Moviecard */}
      <Card className={cardClasses.root}>
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
              image={`https://image.tmdb.org/t/p/w500${props.poster}`}
              title={props.title}
            />
          </Link>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <LocalActivityIcon></LocalActivityIcon>
              {props.voteAvg}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button id={props.id} variant="contained" color="default">
            Watch trailer
          </Button>
          <Button
            name={props.title}
            onClick={addMovieToWatchList}
            variant="contained"
            color="default"
          >
            <PlaylistAddIcon></PlaylistAddIcon>
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Movie;
