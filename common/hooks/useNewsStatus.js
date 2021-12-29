import {useCallback, useEffect, useState} from 'react';
import GetNewsList from '../../core/domain/news/repositories/getNewsList';

const useNewsStatus = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    setIsLoading(true);
    GetNewsList().then(res => setData(res));
  }, []);

  useEffect(() => {
    data && setIsLoading(false);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading];
};

export default useNewsStatus;
