import RNLocation, { subscribeToSignificantLocationUpdates } from "react-native-location";

const geolocationConfig = async () => {
  return await RNLocation.configure({
    distanceFilter: 5.0,
  });
};

export const requestGeolocationPermission = async () => {
  return await RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'fine',
      rationale: {
        title: 'Location permission',
        message: 'We use your location to demo the library',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  });
};

export const initGeolocation = async () => {
  await geolocationConfig();
  return await requestGeolocationPermission();
};
