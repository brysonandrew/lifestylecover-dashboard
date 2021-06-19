import gql from "graphql-tag"

export const ADVISOR_NOTE_FRAGMENTS = {
  ADVISOR_NOTE: gql`
    fragment ADVISOR_NOTE on AdvisorNote {
      id
      title
      advisorNotes {
        priorities {
          text
        }
        recommendations {
          text
        }
        notes
      }
    }
  `,
}
