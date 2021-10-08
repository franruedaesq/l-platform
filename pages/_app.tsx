import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Menu from '../components/Menu';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import { supabase } from '../supabase';
import { UserContextProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;
