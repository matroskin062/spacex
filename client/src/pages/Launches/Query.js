import { gql } from 'apollo-boost';

export const getLaunches = gql`
  query getLaunches {
    getAllLaunches {
      mission_name
      flight_number
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
  }
`;
