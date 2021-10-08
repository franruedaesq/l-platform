import styled from 'styled-components';
import { supabase } from '../supabase';
import { useRouter } from 'next/router';
import { useUser } from '../context';
import useIsAuth from '../hooks';

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.background};
`;

const MenuButton = styled.button`
  border: none;
  color: ${(props) => props.theme.principal};
  padding: 0 10px;
  position: relative;
  cursor: pointer;
  width: 70px;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.principalDark};

    &::before {
      border-left: 2px solid ${(props) => props.theme.principalDark};
    }
  }

  &::before {
    position: absolute;
    top: 0;
    left: -5px;
    height: 100%;
    content: '';
    border-left: 2px solid ${(props) => props.theme.principal};
    transform: skew(345deg);
  }
`;

function Menu() {
  const router = useRouter();
  const isOnline = useIsAuth();
  console.log(isOnline);
  async function signout() {
    const { error } = await supabase.auth.signOut();
    router.reload(window.location.pathname);
  }
  return (
    <MenuContainer>
      {isOnline ? (
        <MenuButton onClick={signout}>Salir</MenuButton>
      ) : (
        <MenuButton onClick={() => router.push('/login')}>Ingresar</MenuButton>
      )}
    </MenuContainer>
  );
}

export default Menu;
