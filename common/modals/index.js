import React from 'react';
import BottomSwipeModal from '../components/modals/bottomSwipeModal';
import useModalStatus from '../hooks/useModalStatus';

const ModalsManagement = () => {
  const {showBottomSwipeModal, setShowBottomSwipeModal, config} =
    useModalStatus();

  const hideBottomSwipeModal = () => setShowBottomSwipeModal(false);

  return (
    <>
      <BottomSwipeModal
        visible={showBottomSwipeModal}
        onHide={hideBottomSwipeModal}
        config={config}
      />
    </>
  );
};

export default ModalsManagement;
