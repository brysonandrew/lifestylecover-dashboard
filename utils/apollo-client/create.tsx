import fetch from "isomorphic-unfetch"
import { ApolloClient } from "apollo-client"
import { onError } from "apollo-link-error"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { ApolloLink } from "apollo-link"
import { setContext } from "apollo-link-context"
import { GRAPHQL_URL, AUTH_TOKEN_KEY, LOGIN_ROUTE } from "../../data"
import { store } from ".."
import { isBrowser } from "../browser"
import { snackbarStore } from "../../common"

// Update the GraphQL endpoint to any instance of GraphQL that you like

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
  // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  // credentials: "include"
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  let token = null
  if (isBrowser) {
    token = store(AUTH_TOKEN_KEY)
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
      if (message.includes("not authenticated")) {
        snackbarStore.dispatch.snackbar.handleOpen({
          message: "Please log in",
          severity: "info",
          redirect: LOGIN_ROUTE,
        })
      }
      // else {
      //   snackbarStore.dispatch.snackbar.handleOpen({message, severity: 'error'});
      // }
    })
  } else if (networkError) {
    if (networkError["statusCode"] && networkError["statusCode"] === 403) {
      snackbarStore.dispatch.snackbar.handleOpen({
        message: "Forbidden",
        severity: "info",
        redirect: LOGIN_ROUTE,
      })
    }
    console.log(JSON.stringify(networkError))
    console.log(`[Network error]: ${networkError}`)
  }
})

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
export function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache().restore(initialState),
  })
}
