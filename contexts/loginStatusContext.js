import React, {createContext, useState} from 'react';

const LoginStatusContext = createContext();
export default LoginStatusContext;

export const LoginStatusProvider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const value = {
    isSignedIn,
    setIsSignedIn: val => {
      setIsSignedIn(val);
    },
  };

  return (
    <LoginStatusContext.Provider value={value}>
      {children}
    </LoginStatusContext.Provider>
  );
};
