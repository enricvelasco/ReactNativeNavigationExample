import NewsEntity from '../model/newsEntity';

const GetNewsList = async () => {
  const module = await import('../../../../mocks/news');
  const {news} = module.default;

  return news.map(item => NewsEntity(item));
};

export default GetNewsList;
