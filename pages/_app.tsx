import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import appStore from 'components/app/store';
import { AppConfig } from 'components/app/config';
//@ts-ignore
import 'styles/globals.scss';

function TradelingTestApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={appStore}>
      <Head>
        <title>{AppConfig.pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default TradelingTestApp;
