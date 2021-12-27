import ParkingEntity from '../model/parkingEntity';

const GetParkingList = async () => {
  const module = await import('../../../../mocks/parking');
  const {parks} = module.default;

  return parks.map(item => ParkingEntity(item));
};

export default GetParkingList;
