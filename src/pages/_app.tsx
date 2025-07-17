import '@/styles/globals.css';
import App, { AppContext } from 'next/app';
import type { AppProps } from 'next/app';
import { ActiveThemeProvider } from '@/components/active-theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActiveThemeProvider >
      <Component {...pageProps} />
    </ActiveThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;



