import React, { ReactNode } from 'react';
import { withApollo, isBrowser, store } from '../utils';
import { NextRouter } from 'next/router';
import "../styles/reset.css"
import "../styles/style.css"
import { AUTH_TOKEN_KEY } from '../data';

type TProps = {
  err: any
  pageProps?: any
  router: NextRouter
  Component: any
}

const MyApp = (props: TProps) => {
  const { Component, pageProps, router } = props;
  const [user, setUser] = React.useState(null)

  const handleSetAuthToken = (token?: string) => {
    if (isBrowser) {
      store(AUTH_TOKEN_KEY, token)
    }
  }

  const handleUpdateUser = (userConfig?) => {
    if (userConfig) {
      if (userConfig.authToken) {
        handleSetAuthToken(userConfig.authToken)
      }
      if (router.pathname === '/') {
        router.push('/?activeMenuItem=profile', '/profile')
      }
      setUser(userConfig.user)
    } else {
      handleSetAuthToken(null)
      router.replace('/')
      setUser(null)
    }
  }

  return (
    <Component
      {...pageProps}
      user={user}
      onUpdateUser={handleUpdateUser}
      router={router}
    />
  );
}

// Wraps all components in the tree with the data provider
export default withApollo(MyApp);
