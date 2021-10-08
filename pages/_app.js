import '../styles/globals.css';
import Menu from '../components/Menu';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Theme';
import { supabase } from '../supabase';
import { UserContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
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
