import React from 'react';
import { getAllRockets } from './Query';
import { useQuery } from '@apollo/client';
import s from './Rockets.module.css';
import Preloader from '../Preloader/Preloader';

const Rockets = () => {
  const { data, loading } = useQuery(getAllRockets);
  if (loading && !data) return <Preloader />;
  return (
    <div className={s.Rockets}>
      <h1>Rockets</h1>
      {loading && !data && <Preloader />}
      {
        <div className={s.Grid}>
          {data.getAllRockets.map((rocket) => (
            <div key={rocket.rocket_id} className={s.Rocket}>
              <div>
                <p>Name: {rocket.rocket_name}</p>
                <p>Description: {rocket.description}</p>
              </div>
              <div className={s.RocketImage}>
                <img src={rocket.flickr_images[0]} alt={rocket.rocket_id} />
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Rockets;
