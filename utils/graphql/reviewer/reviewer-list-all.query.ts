import gql from "graphql-tag"

export const REVIEWER_LIST_ALL_QUERY = gql`
  query REVIEWER_LIST_ALL {
    reviewers {
      edges {
        node {
          name
        }
      }
    }
  }
`
