import { MutationOptions, useMutation, useQueryClient } from 'react-query';
import { api } from '../services/api';
import { User } from '../types/User';

const useAddPoints = () => {
  const queryClient = useQueryClient();
  return useMutation((amount: number) => api.addPoints(amount), {
    onMutate: async (amount) => {
      await queryClient.cancelQueries('user');
      const previousUser = queryClient.getQueryData<User>('user');

      if (previousUser) {
        queryClient.setQueryData<User>('user', {
          ...previousUser,
          points: previousUser.points + amount,
        });
      }

      return previousUser;
    },
    onError: (err, variables, previousUser: any) => {
      queryClient.setQueryData<User>('user', previousUser)
    },
  });
};

export default useAddPoints;
