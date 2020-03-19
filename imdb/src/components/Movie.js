import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import WarningIcon from "@material-ui/icons/Warning";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import YouTube from "react-youtube-embed";
import { MovieContext } from "./MovieContext";
import { WatchListContext } from "./WatchListContext";
import { message } from "antd";

const useCardStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 5
  },
  media: {
    height: 180
  }
});

const useDialogStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
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
  const { moviesToWatch, setMoviesToWatch } = useContext(WatchListContext);
  const { movieVideo, fetchMovieVideo } = useContext(MovieContext);
  const cardClasses = useCardStyles();
  const dialogClasses = useDialogStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let watchbtn = document.getElementById(props.id);
    watchbtn.addEventListener("click", handleOpen);

    function handleOpen(event) {
      setOpen(true);
      fetchMovieVideo(
        `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
      );
    }

    return () => {
      watchbtn.removeEventListener("click", handleOpen);
    };
  }, [fetchMovieVideo, movieVideo, props.id]);

  const addMovieToWatchList = event => {
    if (moviesToWatch.filter(movie => movie.id === props.id).length === 0) {
      event.preventDefault();
      setMoviesToWatch([...moviesToWatch, { ...props.movie }]);
    } else {
      return message.warning("This movie is already in your watchlist!", 1);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
        <CardActions style={{ justifyContent: "center" }}>
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

      {/* Popup dialog with embedded youtube trailer*/}
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
        {movieVideo !== "error" ? (
          <YouTube id={movieVideo} />
        ) : (
          <List>
            <ListItem>
              <ListItemText>
                Sorry, this Movie does not have a trailer!
                <WarningIcon></WarningIcon>
              </ListItemText>
            </ListItem>
          </List>
        )}
      </Dialog>
    </React.Fragment>
  );
};

export default Movie;
