import React from 'react';
import { useQuery } from '@apollo/client';
import LaunchesList from '../../components/LaunchesList/LaunchesList';
import Preloader from '../../components/Preloader/Preloader';
import { getLaunches } from './Query';

const Launches = () => {
  const { data, loading } = useQuery(getLaunches);
  if (loading && !data) return <Preloader />;
  return <LaunchesList data={data.getAllLaunches} />;
};

export default Launches;
