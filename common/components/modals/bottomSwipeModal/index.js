import React, {useEffect, useState} from 'react';
import ModalNative from 'react-native-modal';

const BottomSwipeModal = ({config, visible = true, onHide = () => {}}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const hideModal = () => {
    setIsVisible(false);
    onHide();
  };

  return (
    <ModalNative
      isVisible={isVisible}
      onSwipeComplete={hideModal}
      useNativeDriverForBackdrop
      onBackdropPress={hideModal}
      swipeDirection={['down']}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      {config?.component && (
        <config.component onClose={hideModal} {...config?.props} />
      )}
      <></>
    </ModalNative>
  );
};

export default BottomSwipeModal;
