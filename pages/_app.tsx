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
} from '@starknet-react/core';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';

import DefaultLayout from '@/layout/Layout/DefaultLayout';

const nutinoSans = Nunito_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: 'onlyIfNoConnectors',
    // Randomize the order of the connectors.
    order: 'random',
  });

  return (
    <main className={nutinoSans.className}>
      <StarknetConfig
        chains={[goerli, sepolia]}
        provider={publicProvider()}
        connectors={connectors}
        explorer={voyager}
      >
        <ChakraProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </StarknetConfig>
    </main>
  );
}
