import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";
import Movie from "./Movie";
import styled from "styled-components";
import StyledPagination from "./elements/movie_list_elements/StyledPagination";
import StyledTitle from "./elements/movie_list_elements/StyledTitle";
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

const Card = styled.div`
  display: inline-block;
`;

const CardContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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

const MovieList = props => {
  const {
    movies,
    fetchMovies,
    moviePageNumber,
    movieVideo,
    isMovieDialogOpen,
    setMovieDialogOpenStatus
  } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const pageTitle =
    props.url.charAt(0).toUpperCase() +
    props.url.replace("_", " ").slice(1) +
    " movies";
  const onChange = pageNumber => {
    setPage(pageNumber);
  };
  const dialogClasses = useDialogStyles();

  const handleClose = () => {
    setMovieDialogOpenStatus(false);
  };

  useEffect(() => {
    fetchMovies(`https://localhost:44314/${props.url}/${page}`);
  }, [fetchMovies, page, props.url]);

  return (
    <div style={{ background: "black" }}>
      <StyledPagination
        showQuickJumper
        defaultCurrent={1}
        total={moviePageNumber * 10}
        onChange={onChange}
      />
      <StyledTitle>{pageTitle}</StyledTitle>
      <CardContainer>
        {movies.map(movie => (
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
      </CardContainer>
      <StyledPagination
        showQuickJumper
        defaultCurrent={1}
        total={moviePageNumber}
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
