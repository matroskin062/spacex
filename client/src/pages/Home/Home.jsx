import React from 'react';
import LaunchesList from '../../components/LaunchesList/LaunchesList';
import { GetUpcomingLaunches } from './Query';
import { useQuery } from '@apollo/client';

import s from './Home.module.css';
import Preloader from '../../components/Preloader/Preloader';
const Home = () => {
  const { data, loading } = useQuery(GetUpcomingLaunches);

  const list =
    loading && !data ? (
      <Preloader />
    ) : (
      <LaunchesList data={data.getUpcomingLaunches} />
    );

  return (
    <div className={s.Home}>
      <h1>
        <span role='img' aria-label='rocket-emoji'>
          🚀
        </span>
        Upcoming Launches
        <span role='img' aria-label='rocket-emoji'>
          🚀
        </span>
      </h1>
      {list}
    </div>
  );
};

export default Home;
