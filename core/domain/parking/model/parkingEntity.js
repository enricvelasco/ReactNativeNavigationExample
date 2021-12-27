const ParkingEntity = ({id, title, direction, latitude, longitude}) => {
  return Object.freeze({
    id,
    title,
    direction,
    latitude,
    longitude,
  });
};

export default ParkingEntity;
