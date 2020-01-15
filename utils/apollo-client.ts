import { ApolloClient } from 'apollo-client';
import { onError } from "apollo-link-error";
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { GRAPHQL_URL, AUTH_TOKEN_KEY } from '../data';
import { setContext } from 'apollo-link-context';
import { store } from '.';
import Router from "next/router";
import { isBrowser } from "./browser";
import { snackbarStore } from '../common/inputs/error-snackbar/store';

// Update the GraphQL endpoint to any instance of GraphQL that you like

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
  // credentials: "include"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = store(AUTH_TOKEN_KEY);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );

      if (message.includes("not authenticated")) {
        Router.replace("/login");
      } else {
        console.log("dispatch to snackbarStore");
        snackbarStore.dispatch.snackbar.handleOpen(message);
      }
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export const withData =  withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      connectToDevTools: isBrowser,
      ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
      link: errorLink.concat(authLink.concat(httpLink)),
      cache: new InMemoryCache()
        //  rehydrate the cache using the initial data passed from the server:
        .restore(initialState || {})
    })
);
