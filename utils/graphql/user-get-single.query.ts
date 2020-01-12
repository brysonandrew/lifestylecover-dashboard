import gql from 'graphql-tag';

export const USER_GET_SINGLE_QUERY = gql`
  query USER_GET_SINGLE($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`
