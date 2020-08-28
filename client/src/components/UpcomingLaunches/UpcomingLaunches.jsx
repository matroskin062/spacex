import React from 'react';
import { GetUpcomingLaunches } from './Query';
import { useQuery } from '@apollo/client';
import Launch from '../Launch/Launch';
import Preloader from '../Preloader/Preloader';
const UpcomingLaunches = () => {
  const { data, loading } = useQuery(GetUpcomingLaunches);

  if (loading || !data) return <Preloader />;
  return (
    <div>
      {data.getUpcomingLaunches.map((l) => (
        <Launch key={l.mission_name} l={l} />
      ))}
    </div>
  );
};

export default UpcomingLaunches;
