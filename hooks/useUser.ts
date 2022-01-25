import { useQuery } from 'react-query';
import { api } from '../services/api';
import { User } from '../types/User';

const useUser = () => {
  return useQuery<User>('user', () => api.getUser());
};

export default useUser;
