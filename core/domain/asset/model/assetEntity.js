/**
 *
 * TODO: a falta que llegue el parámetro client: {id : 'XXXX}
 * TODO: project debe de llegar como un array de projects en el caso que pueda pertenecer a más de un project.
 * @params streetType => { id: 1, resource: "_calle", key: "calle" }
 */
const AssetEntity = ({
  alias,
  apartment,
  blockNumber,
  city,
  country,
  createdAt,
  id,
  logo,
  projectsId,
  staircase,
  state,
  streetName,
  streetType,
  zipCode,
  type,
}) => {
  return Object.freeze({
    alias,
    apartment,
    blockNumber,
    city,
    country,
    createdAt,
    id,
    logo,
    projectsId,
    staircase,
    state,
    streetName,
    streetType,
    zipCode,
    type,
  });
};

export default AssetEntity;
