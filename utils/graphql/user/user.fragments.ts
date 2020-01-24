import gql from "graphql-tag"

export const USER_FRAGMENTS = {
  LOGIN: gql`
    fragment LOGIN on User {
      id
      username
      roles {
        nodes {
          name
        }
      }
    }
  `,
  CLIENT: gql`
    fragment CLIENT on User {
      id
      username
      name
      mobile
      phone
      address
      dateOfBirth
      occupationRating
      smoker
      policiesRisk {
        edges {
          node {
            id
          }
        }
      }
      policiesAsset {
        edges {
          node {
            id
          }
        }
      }
      policiesKiwisaver {
        edges {
          node {
            id
          }
        }
      }
      policiesPet {
        edges {
          node {
            id
          }
        }
      }
      roles {
        nodes {
          name
        }
      }
    }
  `,
  ADVISOR: gql`
    fragment ADVISOR on User {
      id
      username
      name
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
  ADMIN: gql`
    fragment ADMIN on User {
      id
      username
      name
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
  CONTACT: gql`
    fragment CONTACT on User {
      mobile
      phone
      address
      # email
    }
  `,
  CLIENT_DETAILS: gql`
    fragment CLIENT_DETAILS on User {
      dateOfBirth
      occupationRating
      smoker
    }
  `
}
