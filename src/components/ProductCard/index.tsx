import { Heart, ShoppingCart } from '@phosphor-icons/react'
import { toast } from 'sonner'

import { useCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../Button'
import {
  Container,
  ContainerItens,
  IconContainer,
  ProductName,
  ProductPrice,
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

export function ProductCard({ product }: CardProductsProps) {
  const { putProductInCart } = useCart()

  const notifyAddProduct = () => {
    toast.success('Produto adicionado ao carrinho!')
  }

  return (
    <Container>
      <IconContainer>
        <Heart size={22} />
      </IconContainer>

      <ContainerItens>
        <img src={product.url} alt="Imagem do produto" />

        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <div>
          À vista no Pix
          <span>ou até 10x {formatCurrency(product.price / 10)}</span>
        </div>
        <Button
          onClick={() => {
            putProductInCart(product)
            notifyAddProduct()
          }}
        >
          <ShoppingCart size={24} weight="fill" />
          Adicionar
        </Button>
      </ContainerItens>
    </Container>
  )
}
