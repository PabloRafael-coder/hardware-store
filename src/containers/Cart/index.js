import React from 'react';

import CartLogo from '../../assets/home-logo.png';
import { CartItems } from '../../components';
import { Container, ImageCart } from './styles';
export function Cart() {
  return (
    <Container>
      <ImageCart src={CartLogo} alt="Logo do carrinho" />
      <CartItems />
    </Container>
  );
}
