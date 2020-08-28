import { gql } from 'apollo-boost';

export const getRockets = gql`
  query getRockets {
    getAllRockets {
      rocket_name
      description
    }
  }
`;
