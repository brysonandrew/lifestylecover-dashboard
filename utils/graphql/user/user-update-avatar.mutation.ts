import gql from "graphql-tag"

export const USER_UPDATE_AVATAR_MUTATION = gql`
  mutation USER_UPDATE_AVATAR($id: ID!, $profilePicture: String) {
    updateUser(
      input: {
        clientMutationId: "USER_UPDATE_AVATAR"
        id: $id
        profilePicture: $profilePicture
      }
    ) {
      user {
        id
        profilePicture
      }
    }
  }
`
