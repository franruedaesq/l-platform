import { supabase } from '../../supabase';
import Button from '../../components/Button';
import styles from '../../styles/Home.module.css';

function Login() {
  async function signInWithFacebook() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook',
    });
  }

  return (
    <div className={styles.container}>
      <Button
        handleClick={signInWithFacebook}
        content='Contectate usando Facebook'
      />
    </div>
  );
}

export default Login;
