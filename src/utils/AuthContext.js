import * as React from 'react';

const state = {
  isLoggedIn: false,
  user: null,
  userId: null,
  language: 'en',
  updateAuth: () => {},
  setLanguageFun: () => {},
};

const AuthContext = React.createContext(state);

export default AuthContext;
