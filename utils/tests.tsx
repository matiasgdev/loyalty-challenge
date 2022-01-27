import { render, RenderOptions } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import { queryClient } from '../config/query-client';
import { theme } from '../theme';
import { initStateWith } from '../store/global';

const StoreProvider = store.StoreProvider;

export const renderWithContext = (view: React.ReactElement, opts?: RenderOptions) => {
  const Provider: React.FC = () => {
    return (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <StoreProvider initialState={initStateWith}>{view}</StoreProvider>
        </QueryClientProvider>
      </ThemeProvider>
    );
  };
  return render(view, { wrapper: Provider, ...opts });
};
