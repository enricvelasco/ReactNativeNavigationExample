const NewsEntity = ({id, title, description, imageURL}) => {
  return Object.freeze({
    id,
    title,
    description,
    imageURL,
  });
};

export default NewsEntity;
