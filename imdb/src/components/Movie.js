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
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { MovieContext } from './MovieContext';
import YouTube from 'react-youtube-embed';

const useCardStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 2
  },
  media: {
    height: 180
  }
});

const useDialogStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Movie = props => {
  const { movieVideo, fetchMovieVideo } = useContext(MovieContext);
  const cardClasses = useCardStyles();
  const dialogClasses = useDialogStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchMovieVideo(
      `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
    );
  }, [fetchMovieVideo, props.id]);

  return (
    <React.Fragment>
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
          <Button variant="contained" color="default" onClick={handleClickOpen}>
            watch trailer
          </Button>
        </CardActions>
      </Card>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={dialogClasses.appBar} color="default">
          <Toolbar variant="regular">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <YouTube id={movieVideo} />
      </Dialog>
    </React.Fragment>
  );
};

export default Movie;
