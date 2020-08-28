import { gql } from 'apollo-boost';

export const getLaunchQ = gql`
  query getLaunch($id: Int!) {
    getLaunch(id: $id) {
      mission_name
      launch_date_utc
      links {
        mission_patch
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_id
            payload_type
            manufacturer
            payload_mass_kg
          }
        }
      }
      details
    }
  }
`;
