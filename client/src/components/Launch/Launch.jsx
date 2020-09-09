import React from 'react';
import { Link } from 'react-router-dom';
import s from './Launch.module.css';
import NoImage from '../../assets/no-image.png';
import moment from 'moment';

const Launch = ({ l }) => {
  const { payloads } = l.rocket.second_stage;
  return (
    <div key={l.mission_name} className={s.Launch}>
      <h2>{l.mission_name}</h2>
      <div className={s.Flex}>
        <div>
          <p>
            Launch Date:{' '}
            {l.tentative_max_precision === 'month'
              ? moment(l.launch_date_utc).format('MMM YYYY')
              : l.tentative_max_precision === 'quarter' ||
                l.tentative_max_precision === 'year'
              ? moment(l.launch_date_utc).format('YYYY')
              : moment(l.launch_date_utc)
                  .local()
                  .format('D MMM YYYY, HH:mm:ss')}
          </p>
          {payloads.map((p) => (
            <p key={p.payload_id + p.manufacturer}>
              {p.payload_id} {p.payload_type}
              {p.manufacturer && ' by ' + p.manufacturer}
            </p>
          ))}
        </div>
        <div>
          <img
            src={!l.links.mission_patch ? NoImage : l.links.mission_patch}
            alt={`${l.mission_name} patch`}
          />
        </div>
      </div>
      <Link to={`/mission/${l.flight_number}`}>Details...</Link>
    </div>
  );
};

export default Launch;
