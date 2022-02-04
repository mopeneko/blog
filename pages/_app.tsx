import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { theme } from 'theme';
import 'styles/style.css';

dayjs.extend(utc);
dayjs.extend(timezone);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='theme-color' content='#4fd1c5' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/favicon192x192.png' />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
