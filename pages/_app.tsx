import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { sepolia, goerli } from '@starknet-react/chains';
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  InjectedConnector,
} from '@starknet-react/core';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ArgentMobileConnector } from 'starknetkit/argentMobile';
import { WebWalletConnector } from 'starknetkit/webwallet';

import DefaultLayout from '@/layout/Layout/DefaultLayout';
import { persistor, store } from '@/redux/store';
import theme from '@/styles/theme';
import '../styles/globals.css';

const nutinoSans = Nunito_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: 'argentX', name: 'Argent' } }),
    new InjectedConnector({ options: { id: 'braavos', name: 'Braavos' } }),
    new ArgentMobileConnector(),
  ];

  return (
    <main className={nutinoSans.className}>
      <StarknetConfig
        chains={[goerli, sepolia]}
        provider={publicProvider()}
        connectors={connectors}
        explorer={voyager}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ChakraProvider theme={theme}>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </ChakraProvider>
          </PersistGate>
        </Provider>
      </StarknetConfig>
    </main>
  );
}
