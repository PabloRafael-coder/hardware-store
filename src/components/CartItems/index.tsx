import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Container, Header, Body, Empty } from './styles'

export function CartItems() {
  const { cart, increaseProduct, decreaseProduct } = useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cart.length > 0 ? (
        cart.map((product) => (
          <Body key={product.id}>
            <img src={product.url} alt=""></img>
            <p className="product-name">{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantifyGrid">
              <button
                className="ButtonNegative"
                onClick={() => decreaseProduct(product.id)}
              >
                -
              </button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProduct(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.price * product.quantity)}</p>
          </Body>
        ))
      ) : (
        <Empty>Carrinho vazio</Empty>
      )}
    </Container>
  )
}
