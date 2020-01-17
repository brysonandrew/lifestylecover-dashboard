import gql from 'graphql-tag';
import { USER_FRAGMENTS } from './user.fragments';

export const USER_GET_VIEWER_QUERY = gql`
  query USER_GET_VIEWER {
    viewer {
      ...USER_INFO
    }
  }
  ${USER_FRAGMENTS.USER_INFO}
`
