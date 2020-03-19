import React, { useContext } from 'react';
import { Table } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import { WatchListContext } from './WatchListContext';

const WatchList = props => {
  const { moviesToWatch } = useContext(WatchListContext);

  console.log(moviesToWatch);

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
          <StarTwoTone twoToneColor="#ebe82f" />
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
    }
  ];

  return (
    <div style={{ marginTop: '50px' }}>
      <Table columns={columns} dataSource={moviesToWatch} />
    </div>
  );
};

export default WatchList;
