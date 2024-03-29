import gql from "graphql-tag"
import { ADVISOR_NOTE_FRAGMENTS } from "./advisor-note.fragments"

export const ADVISOR_NOTE_LIST_BY_ADVISOR_QUERY = gql`
  query ADVISOR_NOTE_LIST_BY_ADVISOR($id: Int!) {
    advisorNotes(where: { author: $id }) {
      edges {
        node {
          ...ADVISOR_NOTE
        }
      }
    }
  }
  ${ADVISOR_NOTE_FRAGMENTS.ADVISOR_NOTE}
`
