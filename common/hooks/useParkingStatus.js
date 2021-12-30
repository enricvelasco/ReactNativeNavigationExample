import {useCallback, useEffect, useState} from 'react';
import GetParkingList from '../../core/domain/parking/repositories/getParkingsList';

const useParkingStatus = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    setIsLoading(true);
    GetParkingList().then(res => setData(res));
  }, []);

  useEffect(() => {
    data && setIsLoading(false);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading];
};

export default useParkingStatus;
