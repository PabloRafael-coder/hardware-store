import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'

import {
  Container,
  ContainerItens,
  Image,
  NameProduct,
  PriceProduct,
} from './styles'

interface CardProductsProps {
  product: {
    category: {
      id: number
      name: string
    }

    id: number
    name: string
    price: number
    offer: boolean
    path: string
    url: string
    category_id: number
    createdAt: string
    updatedAt: string
  }
}

export function CardProducts({ product }: CardProductsProps) {
  const { putProductInCart } = useCart()

  const notifyAddProduct = () => {
    toast.success('Item adicionado ao carrinho')
  }

  return (
    <Container>
      <Image src={product.url} alt="" />
      <ContainerItens>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>{formatCurrency(product.price)}</PriceProduct>
        <Button
          onClick={() => {
            putProductInCart(product)
            notifyAddProduct()
          }}
        >
          Adicionar
        </Button>
      </ContainerItens>
    </Container>
  )
}
