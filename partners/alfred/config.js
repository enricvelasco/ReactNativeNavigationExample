import UnregisteredAlfredNavigation from './navigation/unlogged';
import {AlfredLoggedNavigation} from './navigation/logged';

export const alfredConfig = {
  idPartner: 'Alf1',
  unLoggedNavigation: UnregisteredAlfredNavigation,
  loggedNavigation: AlfredLoggedNavigation,
};
