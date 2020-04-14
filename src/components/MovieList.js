import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "./contexts/MovieContext";
import Movie from "./Movie";
import {
  StyledPagination,
  StyledTitle,
  Card,
} from "./elements/MovieListElements";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";
import YouTube from "react-youtube-embed";
import Box from "@material-ui/core/Box";

const useDialogStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MovieList = (props) => {
  const {
    movies,
    fetchMovies,
    moviePageNumber,
    movieVideo,
    isMovieDialogOpen,
    setMovieDialogOpenStatus,
  } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const pageTitle =
    props.url.charAt(0).toUpperCase() +
    props.url.replace("-", " ").slice(1) +
    " movies";
  const onChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const dialogClasses = useDialogStyles();

  const handleClose = () => {
    setMovieDialogOpenStatus(false);
  };

  useEffect(() => {
    fetchMovies(`https://localhost:44314/api/${props.url}/${page}`);
  }, [fetchMovies, page, props.url]);

  return (
    <div>
      <StyledPagination
        showQuickJumper
        defaultCurrent={1}
        total={moviePageNumber * 10}
        onChange={onChange}
      />
      <StyledTitle>{pageTitle}</StyledTitle>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Movie
              key={movie.id}
              id={movie.id}
              originalId={movie.originalId}
              title={movie.originalTitle}
              poster={movie.posterPath}
              video={movie.video}
              voteAvg={movie.voteAverage}
              movie={movie}
            />
          </Card>
        ))}
        ;
      </Box>
      <StyledPagination
        showQuickJumper
        defaultCurrent={1}
        total={moviePageNumber * 10}
        onChange={onChange}
      />
      {/* Popup dialog with embedded youtube trailer*/}
      <Dialog
        fullScreen
        open={isMovieDialogOpen}
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
        {movieVideo !== "unknown" ? (
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
    </div>
  );
};

export default MovieList;
