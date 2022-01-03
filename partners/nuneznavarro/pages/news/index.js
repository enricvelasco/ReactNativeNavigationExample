import React, {useEffect} from 'react';
import useLoginStatus from '../../../../common/hooks/useLoginStatus';
import useModalStatus from '../../../../common/hooks/useModalStatus';
import {LoginModal} from '../../modals/login';
import NewsTemplate from '../../../../common/components/ui/templates/NewsTemplate';
import {NewDetailModal} from '../../modals/newDetail';
import {UseGeolocationStatus} from '../../../../common/hooks/useGeolocationStatus';
import {ParkingListModal} from '../../modals/parkingsList';

const NewsScreen = ({route}) => {
  const {longitude, latitude} = UseGeolocationStatus();
  const {setIsSignedIn} = useLoginStatus();
  const {setShowBottomSwipeModal, setConfig} = useModalStatus();
  const {data} = route.params;

  const loginModalConfig = {
    component: LoginModal,
    props: {
      onLogin: () => setIsSignedIn(true),
    },
  };

  const newDetailModalConfig = {
    component: NewDetailModal,
  };

  const parkingModalConfig = {
    component: ParkingListModal,
  };

  const showModal = () => {
    setConfig(loginModalConfig);
    setShowBottomSwipeModal(true);
  };

  const showDetailModal = item => {
    newDetailModalConfig.props = {...item};
    setConfig(newDetailModalConfig);
    setShowBottomSwipeModal(true);
  };

  const showParkingModal = () => {
    parkingModalConfig.props = {longitude, latitude};
    setConfig(parkingModalConfig);
    setShowBottomSwipeModal(true);
  };

  return (
    <NewsTemplate
      list={data}
      posterImage={'https://picsum.photos/400'}
      onSelectProfile={showModal}
      onSelectNew={showDetailModal}
      onSelectParkingSearcher={showParkingModal}
    />
  );
};

export default NewsScreen;
