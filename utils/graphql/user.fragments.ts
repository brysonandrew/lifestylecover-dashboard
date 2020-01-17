import gql from 'graphql-tag';

export const USER_FRAGMENTS = {
  USER_INFO: gql`
    fragment USER_INFO on User {
      id
      username
      name
      email
      firstName
      lastName
      mobile
      phone
      address
      roles {
        nodes {
          name
        }
      }
    }
  `,
};
