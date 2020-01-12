import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import "../styles/reset.css"
import "../styles/style.css"

import { withData } from '../utils';

class MyApp extends App<any, any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
