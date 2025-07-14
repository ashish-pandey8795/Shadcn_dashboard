// pages/_app.tsx
// pages/_app.tsx
import '@/styles/globals.css'; // ✅ Adjust path if needed
import App from 'next/app';
import type { AppProps } from 'next/app';
import { ActiveThemeProvider } from '@/components/active-theme'; // ✅ adjust path if needed

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActiveThemeProvider>
      <Component {...pageProps} />
    </ActiveThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
