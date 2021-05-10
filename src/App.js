import React from 'react';
import { ApolloProvider, gql } from '@apollo/client';
import client from './utils/client';
import App from './pages';

import AuthContext from './utils/AuthContext';

function App2() {
  const [auth, setAuth] = React.useState({
    isLoggedIn: false,
    user: null,
    userId: null,
    language: 'en',
  });

  const updateAuth = async (user, token) => {
    await window.localStorage.setItem('token', token);
    setAuth({ isLoggedIn: true, user, userId: user.id });
  };

  const logout = async () => {
    await window.localStorage.removeItem('token');
    setAuth({ isLoggedIn: false, user: null, userId: null });
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ ...auth, updateAuth, logout }}>
        <App />
      </AuthContext.Provider>
    </ApolloProvider>
  );
}
export default App2;
