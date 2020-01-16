import { isBrowser } from "../browser";
import { createApolloClient } from './create';

let globalApolloClient = null
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
export function initApolloClient(initialState?) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState)
  }

  return globalApolloClient
}
