import React, {createContext, useState} from 'react';

const ModalStatusContext = createContext();
export default ModalStatusContext;

export const ModalStatusProvider = ({children}) => {
  const [showBottomSwipeModal, setShowBottomSwipeModal] = useState(false);
  const [config, setConfig] = useState({component: null});

  const value = {
    showBottomSwipeModal,
    config,
    setShowBottomSwipeModal: val => {
      setShowBottomSwipeModal(val);
    },
    setConfig: val => setConfig(val),
  };

  return (
    <ModalStatusContext.Provider value={value}>
      {children}
    </ModalStatusContext.Provider>
  );
};
