import {useCallback, useEffect, useState} from 'react';
import GetAssetsList from '../../core/domain/asset/respositories/getAssetsList';

const useAssetsStatus = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    setIsLoading(true);
    GetAssetsList().then(res => setData(res));
  }, []);

  useEffect(() => {
    data && setIsLoading(false);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading];
};

export default useAssetsStatus;
