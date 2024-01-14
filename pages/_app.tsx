import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { sepolia, goerli } from '@starknet-react/chains';
import {
  StarknetConfig,
  publicProvider,
  argent,
  useInjectedConnectors,
  voyager,
} from '@starknet-react/core';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GoogleAnalytics from '@/components/SEO/GoogleAnalytics';
import DefaultLayout from '@/layout/Layout/DefaultLayout';
import { persistor, store } from '@/redux/store';
import theme from '@/styles/theme';
import '../styles/globals.css';

const nutinoSans = Nunito_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent()], // use only argent
    includeRecommended: 'onlyIfNoConnectors',
    order: 'random',
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://coinflip.decolgenlabs.com/favicon.ico" />
        <meta
          property="twitter:image"
          content="https://coinflip.decolgenlabs.com/banner/banner.png"
        />
        <meta
          property="twitter:description"
          content="Face To See CoinFlip is the first betting game within the Starknet Arcade Hub, enabling Starknet degens to immerse in our betting ecosystem. Have fun - Play - Win and multiply your holdings on Starknet!"
        />
        <meta name="keywords" content="Coinflip, Starknet, Decolgenlabs" />
        <meta name="author" content="Decolgen Labs" />
      </Head>
      <NextSeo
        title="Starknet Coinflip "
        description="Face To See CoinFlip is the first betting game within the Starknet Arcade Hub, enabling Starknet degens to immerse in our betting ecosystem. Have fun - Play - Win and multiply your holdings on Starknet!"
        openGraph={{
          title: ' Starknet Coinflip',
          description:
            'Face To See CoinFlip is the first betting game within the Starknet Arcade Hub, enabling Starknet degens to immerse in our betting ecosystem. Have fun - Play - Win and multiply your holdings on Starknet!',
          url: 'https://coinflip.decolgenlabs.com/',
          site_name: 'Coinflip',
          locale: 'en_IE',
          type: 'website',
        }}
        twitter={{
          handle: '@handle',
          site: '@Starknet Conflip',
          cardType: 'summary_large_image',
        }}
      />
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
      <GoogleAnalytics />
    </>
  );
}
