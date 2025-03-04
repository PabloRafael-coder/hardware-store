import { useHistory } from 'react-router-dom';

import imageCart from '../../assets/shopping-cart.svg';
import imagePerson from '../../assets/user.svg';
import { useUser } from '../../hooks/UserContext';
import {
  Container,
  ContainerRight,
  ContainerLeft,
  PageLink,
  DivisionLine
} from './styles';

export function Header() {
  const {
    logout,
    userData: { name }
  } = useUser();
  const {
    push,
    location: { pathname }
  } = useHistory();

  const logoutUser = () => {
    logout();
    push('/login');
  };

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('produtos')}
          isActive={pathname === '/produtos'}
        >
          Produtos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink
          onClick={() => push('carrinho')}
          isActive={pathname === '/carrinho'}
        >
          <img src={imageCart} alt="imagem do carrinho" />
        </PageLink>
        <PageLink>
          <img src={imagePerson} alt="imagem do usuário" />
        </PageLink>
        <DivisionLine></DivisionLine>
        <div>
          <p>Olá, {name}</p>
          <PageLink onClick={logoutUser}>Sair</PageLink>
        </div>
      </ContainerRight>
    </Container>
  );
}
