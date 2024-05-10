import React from 'react';

import listNav from './menu-list';
import { Container, ItemContainer, MenuNav } from './styles';

export function SideMenuAdmin() {
  return (
    <Container>
      <hr></hr>
      {listNav.map(item => (
        <ItemContainer key={item.id}>
          <item.icon style={{ color: 'white' }} />
          <MenuNav to={item.link}>{item.label}</MenuNav>
        </ItemContainer>
      ))}
      <hr></hr>
    </Container>
  );
}
