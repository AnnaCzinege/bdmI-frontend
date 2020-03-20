import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Layout, Typography, Card, Col, Row, Rate } from "antd";
import StyledContent from "./elements/movie_details_elements/StyledContent";
import StyledFooter from "./elements/movie_details_elements/StyledFooter";
import StyledCard from "./elements/movie_details_elements/StyledCard";
import StyledTitle from "./elements/movie_details_elements/StyledDetailsTitle";
import StyledRate from "./elements/movie_details_elements/StyledRate";
import StyledPageHeader from "./elements/movie_details_elements/StyledInfoContainer";

const MovieDetails = props => {
  const {
    movieId,
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
    const movieId = props.location.state.id;
    fetchMovieDetails(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bc3417b21d3ce5c6f51a602d8422eff9&language=en-US`
    );
  }, [fetchMovieDetails, movieId, props.location.state.id]);

  const genres = movieGenres.map(item => {
    return <div>{item.name}</div>;
  });

  const languages = movieLanguages.map(item => {
    return <div>{item.name}</div>;
  });

  const { Paragraph } = Typography;
  const { Meta } = Card;

  const rating = ["terrible", "bad", "normal", "good", "wonderful"];
  const [ratingValue, setRatingValue] = useState(4);
  const handleChange = ratingValue => {
    setRatingValue(ratingValue);
  };

  return (
    <div>
      <Layout className="layout">
        <StyledContent>
          <StyledTitle>{movieTitle}</StyledTitle>
          <div className="site-layout-content">
            <Row>
              <div className="site-card-wrapper">
                <Col>
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
                </Col>
              </div>
              <Col>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    <StyledCard hoverable title="Release date" bordered={true}>
                      {movieReleaseDate}
                    </StyledCard>
                  </Col>
                  <Col>
                    <StyledCard hoverable title="Runtime" bordered={true}>
                      {movieRuntime}
                    </StyledCard>
                  </Col>
                  <Col>
                    <StyledCard hoverable title="Genres" bordered={true}>
                      {genres}
                    </StyledCard>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    <StyledCard hoverable title="Languages" bordered={true}>
                      {languages}
                    </StyledCard>
                  </Col>
                  <Col>
                    <StyledCard hoverable title="Average vote" bordered={true}>
                      {movieVoteAverage}
                    </StyledCard>
                  </Col>
                  <Col>
                    <StyledCard hoverable title="All vote" bordered={true}>
                      {movieVoteCount}
                    </StyledCard>
                  </Col>
                </Row>
                <StyledRate>
                  <span>
                    {"Rate this:"}
                    <Rate
                      tooltips={rating}
                      onChange={handleChange}
                      value={ratingValue}
                    />
                    {ratingValue ? (
                      <span className="ant-rate-text">
                        {rating[ratingValue - 1]}
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </StyledRate>
              </Col>
            </Row>

            <StyledPageHeader title="Overview" className="site-page-header">
              <Paragraph style={{ textAlign: "left" }}>
                {movieOverview}
              </Paragraph>
            </StyledPageHeader>
          </div>
        </StyledContent>
        <StyledFooter>Ant Design ©2018 Created by Ant UED</StyledFooter>
      </Layout>
    </div>
  );
};

export default MovieDetails;
