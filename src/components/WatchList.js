import React, { useContext } from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { StarFilled, DeleteFilled } from '@ant-design/icons';
import { WatchListContext } from './WatchListContext';

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
      dataIndex: 'title'
    },
    {
      title: 'Poster',
      dataIndex: 'poster_path',
      render: text => (
        <img
          style={{ height: '120px', width: '80px' }}
          src={`https://image.tmdb.org/t/p/w500${text}`}
          alt="poster"
        />
      )
    },
    {
      title: 'Vote average',
      dataIndex: 'vote_average',
      render: text => (
        <React.Fragment>
          <StarFilled style={{ color: 'orange' }} />
          {text}
        </React.Fragment>
      )
    },
    {
      title: 'Release date',
      dataIndex: 'release_date'
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
