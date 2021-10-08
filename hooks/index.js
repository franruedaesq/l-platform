import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const useIsAuth = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const sessionResp = supabase.auth.session();
      setSession(sessionResp);
    }, 1000);
  }, []);

  return session;
};

export default useIsAuth;
