import React from 'react';

import CartLogo from '../../assets/home-logo.png';
import { CartItems, CartResume } from '../../components';
import { Container, ImageCart, ContainerItems } from './styles';
export function Cart() {
  return (
    <Container>
      <ImageCart src={CartLogo} alt="Logo do carrinho" />
      <ContainerItems>
        <CartItems />
        <CartResume />
      </ContainerItems>
    </Container>
  );
}
