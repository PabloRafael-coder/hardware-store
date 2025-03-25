import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import { api } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [taxDelivery] = useState(5)

  const { cart } = useCart()

  useEffect(() => {
    const sumAllProduct = cart.reduce((acc, product) => {
      return product.price * product.quantity + acc
    }, 0)

    setFinalPrice(sumAllProduct)
  }, [cart])

  const submitOrder = async () => {
    const order = cart.map((product) => {
      return { id: product.id, quantity: product.quantity }
    })
    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Pedido sendo realizado, aguarde!',
      success: 'Pedido realizado com sucesso!',
      error: 'Pedido não realizado!',
    })
  }

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
        <Button onClick={() => submitOrder()}>Finalizar Pedido</Button>
      </>
    </Container>
  )
}
