import React, { useContext, useEffect } from "react";
import { Table, Popconfirm, Button } from "antd";
import { StarFilled, DeleteFilled } from "@ant-design/icons";
import { WatchListContext } from "./contexts/WatchListContext";
import DefaultMoviePoster from "../resources/images/default_movie_poster.jpg";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

const WatchList = (props) => {
  const {
    moviesToWatch,
    setMoviesToWatch,
    getCurrentUser,
    deleteMovieFromWatchList,
  } = useContext(WatchListContext);
  const { signInStatus } = useContext(UserContext);

  const handleDelete = (id) => {
    // const UpdatedmoviesToWatch = [...moviesToWatch].filter(
    //   (item) => item.id !== id
    // );

    //setMoviesToWatch(UpdatedmoviesToWatch);
    let watchListItem = { userId: getCurrentUser().id, movieid: id };
    console.log(watchListItem);
    deleteMovieFromWatchList(watchListItem);
    console.log(moviesToWatch);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "originalTitle",
    },
    {
      title: "Poster",
      dataIndex: "posterPath",
      render: (text, row) => (
        <Link
          to={{
            pathname: `/movie/${row.id}`,
            state: {
              id: row.id,
            },
          }}
        >
          {row.posterPath.length > 0 ? (
            <img
              style={{ height: "120px", width: "80px" }}
              src={`https://image.tmdb.org/t/p/w500${text}`}
              alt="poster"
            />
          ) : (
            <img
              style={{ height: "120px", width: "80px" }}
              src={DefaultMoviePoster}
              alt="poster"
            />
          )}
        </Link>
      ),
    },
    {
      title: "Vote average",
      dataIndex: "voteAverage",
      render: (text) => (
        <React.Fragment>
          <StarFilled style={{ color: "orange" }} />
          {text}
        </React.Fragment>
      ),
    },
    {
      title: "Release year",
      dataIndex: "releaseDate",
      render: (text) => text.substring(0, 4),
    },
    {
      title: "OverView",
      dataIndex: "overview",
    },
    {
      title: "Delete",
      dataIndex: "id",
      render: (text, record) =>
        moviesToWatch.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(text)}
          >
            <Button className="delete-btn">
              <DeleteFilled />
              {record.key}
            </Button>
          </Popconfirm>
        ) : null,
    },
  ];

  useEffect(() => {}, [signInStatus]);

  return (
    <div style={{ marginTop: "50px" }}>
      <Table columns={columns} dataSource={moviesToWatch} />
    </div>
  );
};

export default WatchList;
