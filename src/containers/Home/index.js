import React from 'react';

import LogoHome from '../../assets/home-logo.png';
import Category from '../../components/Category';
import Offer from '../../components/Offer';
import { Container, ImgContainer } from './styles';

function Home() {
  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <Category />
      <Offer />
    </Container>
  );
}

export default Home;
