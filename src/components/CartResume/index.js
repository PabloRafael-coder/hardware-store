import React, { useEffect, useState } from 'react';

import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/currency';
import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [taxDelivery] = useState(5);

  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllProduct = cartProducts.reduce((acc, product) => {
      return product.price * product.quantity + acc;
    }, 0);

    setFinalPrice(sumAllProduct);
  }, [cartProducts]);

  return (
    <Container>
      <div className="container-items-upper">
        <h2 className="items-upper-title">Resumo</h2>
        <p className="items-upper-items">Itens</p>
        <p className="items-upper-price">{formatCurrency(finalPrice)}</p>
        <p className="items-upper-rate">Taxa de entrega</p>
        <p className="items-upper-priceDelivery">
          {formatCurrency(taxDelivery)}
        </p>
      </div>
      <div className="container-items-bottom">
        <p className="items-bottom-text">Total </p>
        <p className="items-bottom-price">
          {formatCurrency(finalPrice + taxDelivery)}
        </p>
      </div>
      <>
        <Button>Finalizar Pedido</Button>
      </>
    </Container>
  );
}
