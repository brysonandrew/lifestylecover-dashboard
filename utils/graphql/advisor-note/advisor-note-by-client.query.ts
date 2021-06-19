import gql from "graphql-tag"
import { ADVISOR_NOTE_FRAGMENTS } from "./advisor-note.fragments"

export const ADVISOR_NOTE_BY_CLIENT_QUERY = gql`
  query ADVISOR_NOTE_BY_CLIENT($client: String!) {
    advisorNoteBy(slug: $client) {
      ...ADVISOR_NOTE
    }
  }
  ${ADVISOR_NOTE_FRAGMENTS.ADVISOR_NOTE}
`
