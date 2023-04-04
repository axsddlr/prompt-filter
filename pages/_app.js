// pages/_app.js
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" storageKey="theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
