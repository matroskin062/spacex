import React from 'react';
import UpcomingLaunches from '../../components/UpcomingLaunches/UpcomingLaunches';
import s from './Home.module.css';
const Home = () => {
  return (
    <div className={s.Home}>
      <h1>🚀 Upcoming Launches 🚀</h1>
      <UpcomingLaunches />
    </div>
  );
};

export default Home;
