import gql from 'graphql-tag';

export const USER_GET_VIEWER_QUERY = gql`
  query USER_GET_VIEWER {
    viewer {
      id
      username
      roles {
        nodes {
          name
        }
      }
    }
  }
`
