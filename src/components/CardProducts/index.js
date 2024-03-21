import PropTypes from 'prop-types';
import React from 'react';

import { formatCurrency } from '../../utils/currency';
import Button from '../Button';
import {
  Container,
  ContainerItens,
  Image,
  NameProduct,
  PriceProduct
} from './styles';

function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} />
      <ContainerItens>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>{formatCurrency(product.price)}</PriceProduct>
        <Button>Adicionar</Button>
      </ContainerItens>
    </Container>
  );
}

export default CardProducts;

CardProducts.propTypes = {
  product: PropTypes.object
};
