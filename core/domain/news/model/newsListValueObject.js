import NewsEntity from './newsEntity';

const NewsListValueObject = list => {
  return Object.freeze({
    newsListValueObject: list.map(item => NewsEntity(item)),
  });
};

export default NewsListValueObject;
