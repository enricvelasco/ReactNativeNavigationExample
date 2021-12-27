import {useCallback, useEffect, useState} from 'react';
import GetAssetsList from '../../core/domain/asset/respositories/getAssetsList';

const useAssetsStatus = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(() => {
    setIsLoading(true);
    GetAssetsList().then(res => setData(res));
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading];
};

export default useAssetsStatus;
