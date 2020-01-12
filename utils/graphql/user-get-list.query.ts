import gql from 'graphql-tag';

export const USER_GET_LIST_QUERY = gql`
  query USER_GET_LIST {
    users {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
