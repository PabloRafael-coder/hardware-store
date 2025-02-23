import React from 'react';

import LogoHome from '../../assets/home-logo.png';
import { Category, Offer } from '../../components';
import { Container, ImgContainer } from './styles';
export function Home() {
  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <Category />
      <Offer />
    </Container>
  );
}
