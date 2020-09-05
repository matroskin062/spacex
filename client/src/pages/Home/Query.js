import { gql } from 'apollo-boost';

export const GetUpcomingLaunches = gql`
  query getUpcomingLaunches($limit: Int, $offset: Int) {
    getUpcomingLaunches(limit: $limit, offset: $offset) {
      flight_number
      mission_name
      launch_date_utc
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
