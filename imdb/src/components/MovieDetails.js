import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Typography, PageHeader, Card, Col, Row, Rate } from "antd";
import StyledContent from "./elements/movie_details_elements/StyledContent";
import StyledFooter from "./elements/movie_details_elements/StyledFooter";

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

  const { Title, Paragraph } = Typography;
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
          <Title>{movieTitle}</Title>
          <div className="site-layout-content">
            <div className="site-card-wrapper">
              <Row gutter={16}>
                <Col span={5}>
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
                <Col>
                  <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Col span={6}>
                      <Card title="Release date" bordered={true}>
                        {movieReleaseDate}
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card title="Runtime" bordered={true}>
                        {movieRuntime}
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card title="Genres" bordered={true}>
                        {genres}
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Col span={6}>
                      <Card title="Languages" bordered={true}>
                        {languages}
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card title="Average vote" bordered={true}>
                        {movieVoteAverage}
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card title="All vote" bordered={true}>
                        {movieVoteCount}
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <span>
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
                  </Row>
                </Col>
              </Row>
            </div>
            <PageHeader title="Overview" className="site-page-header">
              <Paragraph style={{ textAlign: "left" }}>
                {movieOverview}
              </Paragraph>
            </PageHeader>
          </div>
        </StyledContent>
        <StyledFooter>Ant Design ©2018 Created by Ant UED</StyledFooter>
      </Layout>
    </div>
  );
};

export default MovieDetails;
