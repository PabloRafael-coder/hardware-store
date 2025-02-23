import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import React from 'react';

import { useUser } from '../../hooks/UserContext';
import listNav from './menu-list';
import { Container, ItemContainer, MenuNav } from './styles';

export function SideMenuAdmin({ path }) {
  const { logout } = useUser();
  return (
    <Container>
      <hr></hr>

      {listNav.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon style={{ color: 'white' }} />
          <MenuNav to={item.link}>{item.label}</MenuNav>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon style={{ color: 'white' }} />
        <MenuNav to="/login" onClick={logout}>
          Sair
        </MenuNav>
      </ItemContainer>
    </Container>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
};
