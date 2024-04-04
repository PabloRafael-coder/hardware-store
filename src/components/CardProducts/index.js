import PropTypes from 'prop-types';
import React from 'react';

import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/currency';
import { Button } from '../Button';
import {
  Container,
  ContainerItens,
  Image,
  NameProduct,
  PriceProduct
  // Button
} from './styles';

export function CardProducts({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <Image src={product.url} />
      <ContainerItens>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>{formatCurrency(product.price)}</PriceProduct>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </ContainerItens>
    </Container>
  );
}

CardProducts.propTypes = {
  product: PropTypes.object
};
