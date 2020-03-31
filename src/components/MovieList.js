import React, { useState, useEffect, useContext } from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';
import styled from 'styled-components';
import StyledPagination from './elements/movie_list_elements/StyledPagination';
import StyledTitle from './elements/movie_list_elements/StyledTitle';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import YouTube from 'react-youtube-embed';

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
    props.url.replace('_', ' ').slice(1) +
    ' movies';
  const onChange = pageNumber => {
    setPage(pageNumber);
  };
  const dialogClasses = useDialogStyles();

  const handleClose = () => {
    setMovieDialogOpenStatus(false);
  };

  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/movie/${props.url}?api_key=bb29364ab81ef62380611d162d85ecdb&language=en-US&page=${page}`
    );
  }, [fetchMovies, page, props.url]);

  return (
    <div style={{ background: 'black' }}>
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
              title={movie.title}
              poster={movie.poster_path}
              video={movie.video}
              voteAvg={movie.vote_average}
              movie={movie}
            />
          </Card>
        ))}
        ;
      </CardContainer>
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
        <YouTube id={movieVideo} />
      </Dialog>
    </div>
  );
};

export default MovieList;
