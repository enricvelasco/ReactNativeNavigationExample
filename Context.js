import React, {createContext, useEffect, useState} from 'react';

export const Context = createContext();

const Provider = ({children}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const value = {
    isSignedIn,
    setIsSignedIn: val => {
      setIsSignedIn(val);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
