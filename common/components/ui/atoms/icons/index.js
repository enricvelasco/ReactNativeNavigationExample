import React from 'react';
import {HotelHomeIcon} from './hotelHome';
import {HouseChartIcon} from './houseChart';
import {HouseStayIcon} from './houseStay';
import {HouseHomeIcon} from './houseUser';
import {ParkingHomeIcon} from './parkingHome';
import {ServicesIcon} from './services';
import {SettingsIcon} from './settings';
import {UserIcon} from './user';

const IconsList = ({color, size}) => (
  <>
    <HotelHomeIcon color={color} size={size} />
    <HouseChartIcon color={color} size={size} />
    <HouseStayIcon color={color} size={size} />
    <HouseHomeIcon color={color} size={size} />
    <ParkingHomeIcon color={color} size={size} />
    <ServicesIcon color={color} size={size} />
    <SettingsIcon color={color} size={size} />
    <UserIcon color={color} size={size} />
  </>
);

export default IconsList;
