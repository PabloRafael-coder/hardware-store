import React from 'react';

import { useCart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/currency';
import { Container, Header, Body, Empty } from './styles';

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct } = useCart();
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url}></img>
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantifyGrid">
              <button
                className="ButtonNegative"
                onClick={() => decreaseProduct(product.id)}
              >
                -
              </button>
              <p>{product.quantify}</p>
              <button onClick={() => increaseProduct(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.price * product.quantify)}</p>
          </Body>
        ))
      ) : (
        <Empty>Carrinho vazio</Empty>
      )}
    </Container>
  );
}
