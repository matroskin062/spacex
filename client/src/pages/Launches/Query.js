import { gql } from 'apollo-boost';

export const getLaunches = gql`
  query getLaunches($limit: Int, $offset: Int) {
    getAllLaunches(limit: $limit, offset: $offset) {
      mission_name
      flight_number
      launch_success
      upcoming
      rocket {
        rocket_id
        rocket_name
        second_stage {
          payloads {
            payload_type
            payload_id
            manufacturer
            payload_mass_kg
          }
        }
      }
      launch_date_utc
      details
      links {
        mission_patch
        video_link
      }
    }
    totalCount
  }
`;
