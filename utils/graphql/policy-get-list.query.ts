import gql from "graphql-tag"

export const POLICY_GET_LIST_QUERY = gql`
  query POLICY_GET_LIST {
    policies {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
