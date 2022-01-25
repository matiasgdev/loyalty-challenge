import { useMutation, useQueryClient } from 'react-query';
import { api } from '../services/api';
import { Products } from '../types/Product';
import { User } from '../types/User';

const useRedeem = () => {
  const queryClient = useQueryClient();
  return useMutation((productId: string) => api.redeem(productId), {
    onMutate: async (productId) => {
      await queryClient.cancelQueries('user');
      const previousUser = queryClient.getQueryData<User>('user');
      const previousProducts = queryClient.getQueryData<Products>('products');
      const product = previousProducts?.find((product) => product._id === productId);

      if (previousUser) {
        queryClient.setQueryData<User>('user', {
          ...previousUser,
          points: previousUser.points - (product?.cost || 0),
        });
      }

      return { previousUser, previousProducts };
    },
    onError: (err, productId, context: any) => {
      queryClient.setQueryData<User>('user', context?.previousUser);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries('history');
    },
  });
};

export default useRedeem;
