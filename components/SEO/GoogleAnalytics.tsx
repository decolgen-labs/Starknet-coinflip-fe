'use client';
import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-YE1GKJ28TW"
    ></Script>

    <Script id="google-analytics" strategy="afterInteractive">
      {`     
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YE1GKJ28TW');
        gtag('send', 'pageview');
        `}
    </Script>
  </>
);
export default GoogleAnalytics;
