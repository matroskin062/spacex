import { gql } from 'apollo-boost';

export const getAllRockets = gql`
  query GetAllRockets {
    getAllRockets {
      rocket_name
      rocket_id
      description
      flickr_images
    }
  }
`;
