import {LoginStatusProvider} from '../loginStatusContext';
import {ModalStatusProvider} from '../modalContext';
import {combineComponents} from './combineComponents';

const providers = [LoginStatusProvider, ModalStatusProvider];

export const AppContextProvider = combineComponents(...providers);
