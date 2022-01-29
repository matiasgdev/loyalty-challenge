import { useQuery } from 'react-query';
import { api } from '../services/api';
import { History } from '../types/History';
import useUser from './useUser';

const useUserHistory = (active = false) => {
  const { data } = useUser();
  return useQuery<History>('history', api.getHistory, {
    initialData: () => data?.redeemHistory,
    enabled: active
  });
};

export default useUserHistory;
