import React from 'react';

import LogoHome from '../../assets/home-logo.png';
import Category from '../../components/Category';
import { Container, ImgContainer, Headers } from './styles';

function Home() {
  return (
    <Container>
      <Headers>TEXT</Headers>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <Category />
    </Container>
  );
}

export default Home;
