import RNLocation from 'react-native-location';

export const requestGeolocationPermission = async () => {
  console.log('REQUEST_PERM:::');
  return await RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
      rationale: {
        title: 'We need to access your location',
        message: 'We use your location to show where you are on the map',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  });
};

export const checkGeolocationPermission = async () => {
  return await RNLocation.checkPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
    },
  });
};

export const getCurrentPermission = async () => {
  return await RNLocation.getCurrentPermission();
};

export const subscribeToLocationUpdates = async () => {
  return await RNLocation.subscribeToLocationUpdates();
};

export const subscribeToPermissionsUpdates = async () => {
  return await RNLocation.subscribeToPermissionUpdates();
};

export const getLocation = async () => {
  const permission = await checkGeolocationPermission();
  console.log('PERMISSIONS::::', permission);
  if (permission) {
    return await RNLocation.getLatestLocation({timeout: 500});
  } else {
    requestGeolocationPermission().then(perm => {
      // console.log('PERM---->', perm);
      // getLocation();
      if (perm) {
        getLocation();
      } else {
        getCurrentPermission.then(currentPermission => {
          console.log('CURRENT_PERMISSION', currentPermission);
        });
      }
    });
  }
};
