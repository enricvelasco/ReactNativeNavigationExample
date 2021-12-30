const degreesToRadians = degrees => degrees * (Math.PI / 180);

export const getDistanceBetweenTwoCoordinates = (position1, position2) => {
  const earthRadiusKm = 6371;

  const latDiff = degreesToRadians(position2.latitude - position1.latitude);
  const longDiff = degreesToRadians(position2.longitude - position1.longitude);

  const firstPositionLatitude = degreesToRadians(position1.latitude);
  const secondPositionLatitude = degreesToRadians(position2.latitude);

  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.sin(longDiff / 2) *
      Math.sin(longDiff / 2) *
      Math.cos(firstPositionLatitude) *
      Math.cos(secondPositionLatitude);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
};

/* export const getDistanceBetweenTwoCoordinates = (
  position1,
  position2,
  unit = 'K',
) => {
  var radlat1 = (Math.PI * position1.latitude) / 180;
  var radlat2 = (Math.PI * position2.latitude) / 180;
  var theta = position1.longitude - position2.longitude;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') {
    dist = dist * 1.609344;
  }
  if (unit === 'N') {
    dist = dist * 0.8684;
  }
  return dist;
}; */
