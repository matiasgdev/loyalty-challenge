import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../theme/global-style';
import { QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../config/query-client';
import { Slide, ToastContainer } from 'react-toastify';
import CloseButton from '../components/list/icons/close-button';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.rehydratedState}>
        <ThemeProvider theme={theme}>
          <ToastContainer
            className='toast-container'
            position='bottom-left'
            hideProgressBar={true}
            newestOnTop={true}
            closeButton={<CloseButton />}
            autoClose={2500}
            transition={Slide}
            icon={false}
            theme='colored'
            limit={4}
          />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
