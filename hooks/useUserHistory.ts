import { useQuery } from 'react-query';
import { api } from '../services/api';
import { History } from '../types/History';

const useUserHistory = () => {
  return useQuery<History>('history', () => api.getHistory());
};

export default useUserHistory;
