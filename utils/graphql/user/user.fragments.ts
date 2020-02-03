import gql from "graphql-tag"
import { ADVISOR_NOTE_FRAGMENTS } from "../advisor-note/advisor-note.fragments"

export const USER_FRAGMENTS = {
  LOGIN: gql`
    fragment LOGIN on User {
      id
      userId
      username
      name
      firstName
      lastName
      email
      profilePicture
      avatar(size: 56) {
        url
        default
        extraAttr
        foundAvatar
      }
      roles {
        nodes {
          name
        }
      }
    }
  `,
  USER_LIST_ITEM: gql`
    fragment USER_LIST_ITEM on User {
      id
      username
      firstName
      lastName
      email
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
      mobile
      phone
      address
      dateOfBirth
      occupationRating
      smoker
      advisor
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
      mobile
      phone
      address
      profilePicture
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
  `,
}
