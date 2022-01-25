import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 0
      },
  }
});