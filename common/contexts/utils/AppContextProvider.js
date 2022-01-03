import {LoginStatusProvider} from '../loginStatusContext';
import {ModalStatusProvider} from '../modalContext';
import {combineComponents} from './combineComponents';
import {GeolocationStatusContextProvider} from '../geolocationStatusContext';

const providers = [
  LoginStatusProvider,
  ModalStatusProvider,
  GeolocationStatusContextProvider,
];

export const AppContextProvider = combineComponents(...providers);
