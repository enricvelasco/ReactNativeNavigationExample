import {HouseNavigation} from '../navigation/house';
import {ParkingNavigation} from '../navigation/parking';
import {HotelNavigation} from '../navigation/hotel';

export const assetTypes = [
  {
    id: '1H',
    name: 'house',
    navigationComponent: HouseNavigation,
    link: 'HouseNavigation',
    assetType: '1',
  },
  {
    id: '2P',
    name: 'parking',
    navigationComponent: ParkingNavigation,
    link: 'Parking',
    assetType: '2',
  },
  {
    id: '3H',
    name: 'hotel',
    navigationComponent: HotelNavigation,
    link: 'Hotel',
    assetType: '3',
  },
];
