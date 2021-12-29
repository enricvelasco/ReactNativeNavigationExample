import UnregisteredHiltonNavigation from './navigation/unlogged';
import {HiltonLoggedNavigation} from './navigation/logged';

export const hiltonConf = {
  idPartner: 'Hilton1',
  unLoggedNavigation: UnregisteredHiltonNavigation,
  loggedNavigation: HiltonLoggedNavigation,
};
