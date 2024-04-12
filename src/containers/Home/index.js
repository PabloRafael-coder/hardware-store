import React from 'react';

import LogoHome from '../../assets/home-logo.png';
import { Category, Offer, Header } from '../../components';
import { Container, ImgContainer } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <Category />
      <Offer />
    </Container>
  );
}
