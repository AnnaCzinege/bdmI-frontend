import React, { useContext } from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { StarFilled, DeleteFilled } from '@ant-design/icons';
import { WatchListContext } from './WatchListContext';
import { Link } from 'react-router-dom';

const WatchList = props => {
  const { moviesToWatch, setMoviesToWatch } = useContext(WatchListContext);

  const handleDelete = id => {
    const UpdatedmoviesToWatch = [...moviesToWatch].filter(
      item => item.id !== id
    );
    setMoviesToWatch(UpdatedmoviesToWatch);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'originalTitle'
    },
    {
      title: 'Poster',
      dataIndex: 'posterPath',
      render: (text, row) => (
        <Link
          to={{
            pathname: `/movie/${row.id}`,
            state: {
              id: row.id
            }
          }}
        >
          <img
            style={{ height: '120px', width: '80px' }}
            src={`https://image.tmdb.org/t/p/w500${text}`}
            alt="poster"
          />
        </Link>
      )
    },
    {
      title: 'Vote average',
      dataIndex: 'voteAverage',
      render: text => (
        <React.Fragment>
          <StarFilled style={{ color: 'orange' }} />
          {text}
        </React.Fragment>
      )
    },
    {
      title: 'Release year',
      dataIndex: 'releaseDate',
      render: text => text.substring(0, 4)
    },
    {
      title: 'OverView',
      dataIndex: 'overview'
    },
    {
      title: 'Delete',
      dataIndex: 'id',
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
        ) : null
    }
  ];

  return (
    <div style={{ marginTop: '50px' }}>
      <Table columns={columns} dataSource={moviesToWatch} />
    </div>
  );
};

export default WatchList;
