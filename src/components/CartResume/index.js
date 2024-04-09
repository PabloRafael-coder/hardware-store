import React from 'react';

import { Button } from '../Button';
import { Container } from './styles';

export function CartResume() {
  return (
    <Container>
      <div className="container-items-upper">
        <h2 className="items-upper-title">Resumo</h2>
        <p className="items-upper-items">Itens</p>
        <p className="items-upper-price">R$ 10,00</p>
        <p className="items-upper-rate">Taxa de entrega</p>
        <p className="items-upper-priceDelivery">R$ 10,00</p>
      </div>
      <div className="container-items-bottom">
        <p className="items-bottom-text">Total </p>
        <p className="items-bottom-price">R$ 20,00</p>
      </div>
      <>
        <Button>Finalizar Pedido</Button>
      </>
    </Container>
  );
}
