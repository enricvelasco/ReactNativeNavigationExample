const AssetsListValueObject = ({data, links, meta}) => {
  return Object.freeze({
    data,
    links,
    meta,
  });
};

export default AssetsListValueObject;
