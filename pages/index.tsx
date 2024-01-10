import Head from 'next/head';

import Header from '@/components/Header/Header';
import HomePage from '@/components/Home';
import StartGame from '@/components/StartGame';
/* export const metadata: Metadata = {
  title: 'Flipcoin',
  description:
    'DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT',
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: { rel: 'apple-touch-icon-precomposed', url: Favicon.src },
  },
  keywords: ['Decolgen Labs', 'Decolgenlabs', 'Starknet Flipcoin', 'Flipcoin'],
  openGraph: {
    title: 'Flipcoin',
    description:
      'DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT',
    images: [
      {
        url: 'https://www.decolgenlabs.com/images/banner.png',
        width: 1200,
        height: 600,
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    url: 'https://www.decolgenlabs.com/',
    type: 'website',
    emails: 'decolgenlabs@gmail.com',
    siteName: 'Decolgen Labs',
  },
  twitter: {
    title: 'Flipcoin',
    description:
      'DecolGen Labs is a Web3 Development Lab, dedicated to exploring the identity and ownership of digital assets in integration with gamified experience to push forward the multi-chain adoption of NFT',
    images: 'https://www.decolgenlabs.com/images/banner.png',
    site: 'https://www.decolgenlabs.com/',
    creator: '@FaceToSee_',
  },
  category: 'technology',
}; */
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <HomePage />
    </>
  );
}
