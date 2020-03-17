import React, { useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Layout, Typography, PageHeader, Card, Col, Row } from "antd";

const MovieDetails = props => {
  const {
    movieTitle,
    movieOverview,
    movieLanguages,
    movieGenres,
    movieReleaseDate,
    movieRuntime,
    movieVoteAverage,
    movieVoteCount,
    moviePoster,
    fetchMovieDetails
  } = useContext(MovieContext);

  useEffect(() => {
    console.log("movieDetails");
    const movieId = props.location.state.id;
    fetchMovieDetails(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
    );
  }, [fetchMovieDetails, props.location.state.id]);

  const genres = movieGenres.map(item => {
    return <div>{item.name}</div>;
  });

  const languages = movieLanguages.map(item => {
    return <div>{item.name}</div>;
  });

  const { Header, Content, Footer } = Layout;
  const { Title, Paragraph } = Typography;
  const { Meta } = Card;

  return (
    <div>
      <Layout className="layout">
        <Header style={{ padding: "20px 50px" }}>
          <Title style={{ color: "whitesmoke" }}>{movieTitle}</Title>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <div className></div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
                />
              }
            >
              <Meta title={movieTitle} description="www.imdb.com" />
            </Card>
            <PageHeader title="Overview" className="site-page-header">
              <Paragraph style={{ textAlign: "left" }}>
                {movieOverview}
              </Paragraph>
            </PageHeader>
            <PageHeader title="Release date" className="site-page-header">
              <Paragraph>{movieReleaseDate}</Paragraph>
            </PageHeader>
            <PageHeader title="Runtime" className="site-page-header">
              <Paragraph>{movieRuntime}</Paragraph>
            </PageHeader>
            <PageHeader title="Genres" className="site-page-header">
              <Paragraph>{genres}</Paragraph>
            </PageHeader>
            <PageHeader title="Languages" className="site-page-header">
              <Paragraph>{languages}</Paragraph>
            </PageHeader>
            <PageHeader title="Average vote" className="site-page-header">
              <Paragraph>{movieVoteAverage}</Paragraph>
            </PageHeader>
            <PageHeader title="All vote" className="site-page-header">
              <Paragraph>{movieVoteCount}</Paragraph>
            </PageHeader>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default MovieDetails;
