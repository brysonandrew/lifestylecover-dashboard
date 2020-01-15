import React from 'react';
import App, {Container} from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { snackbarStore } from '../common/inputs/error-snackbar/store';
import { StoreProvider } from "easy-peasy";
import { ErrorSnackbar } from '../common/inputs/error-snackbar';
import { withData } from '../utils';
import "../styles/reset.css"
import "../styles/style.css"

class MyApp extends App<any, any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
          <StoreProvider store={snackbarStore}>
            <ErrorSnackbar />
          </StoreProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
