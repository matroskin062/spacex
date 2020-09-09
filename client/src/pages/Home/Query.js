import { gql } from 'apollo-boost';

export const GetUpcomingLaunches = gql`
  query getUpcomingLaunches {
    getUpcomingLaunches {
      flight_number
      mission_name
      launch_date_utc
      is_tentative
      tentative_max_precision
      links {
        mission_patch
      }
      rocket {
        second_stage {
          payloads {
            payload_id
            payload_type
            manufacturer
          }
        }
      }
    }
  }
`;
