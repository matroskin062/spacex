import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { getLaunchQ } from './Query';
import { useParams } from 'react-router-dom';
import s from './LaunchDetails.module.css';
import NoImage from '../../assets/no-image.png';
import Preloader from '../Preloader/Preloader';
import moment from 'moment'

const LaunchDetails = () => {
  const { flight } = useParams();
  const { data, loading } = useQuery(getLaunchQ, {
    variables: { id: +flight },
  });
  const l = data && data.getLaunch;
  if (loading && !data) return <Preloader />;
  return (
    <div class={s.LaunchDetails}>
      <h1>{l.mission_name}</h1>
      <div className={s.Flex}>
        <div>
          <p>
            Launch Date:{' '}
            {l.tentative_max_precision === 'month'
              ? moment(l.launch_date_utc).format('MMM YYYY')
              : l.tentative_max_precision === 'quarter' ||
                l.tentative_max_precision === 'year'
              ? moment(l.launch_date_utc).format('YYYY')
              : moment(l.launch_date_utc).format('D MMM YYYY, h:mm:ss')}
          </p>
          {l.rocket.second_stage.payloads.map((p) => (
            <>
              <p key={p.payload_id + p.manufacturer}>
                {p.payload_id} {p.payload_type}
                {p.manufacturer && ' by ' + p.manufacturer}{' '}
              </p>
              <p>
                {p.payload_mass_kg &&
                  'Payload Mass: ' + p.payload_mass_kg + 'kg'}
              </p>
            </>
          ))}
          <p>{l.details}</p>
        </div>
        <div>
          <img
            src={!l.links.mission_patch ? NoImage : l.links.mission_patch}
            alt={`${l.mission_name} patch`}
          />
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
