import React from 'react';
import Launch from '../Launch/Launch';

const LaunchesList = ({ data }) => {
  return (
    <div>
      {data.map((l) => (
        <Launch key={l.mission_name} l={l} />
      ))}
    </div>
  );
};

export default LaunchesList;
