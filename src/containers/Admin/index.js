import PropTypes from 'prop-types';
import React from 'react';

import { SideMenuAdmin } from '../../components';
import paths from '../../constants/paths';
import ListProducts from './ListProducts';
import NewProduct from './NewProduct';
import Orders from './Orders';
import { Container } from './styles';

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      {path === paths.Order && <Orders />}
      {path === paths.Product && <ListProducts />}
      {path === paths.NewProduct && <NewProduct />}
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
};
