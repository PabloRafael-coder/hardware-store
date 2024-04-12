import React from 'react';

import imageCart from '../../assets/shopping-cart.svg';
import imagePerson from '../../assets/user.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={imageCart} alt="imagem do carrinho" />
      <img src={imagePerson} alt="imagem do usuário" />
    </Container>
  );
}
