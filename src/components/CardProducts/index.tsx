import { toast } from 'react-toastify';

import { useCart, type Cart } from '../../hooks/CartContext';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

import {
  Container,
  ContainerItens,
  Image,
  NameProduct,
  PriceProduct
} from './styles';

interface CardProductsProps {
  product: Cart
}

export function CardProducts({ product }: CardProductsProps) {

  const { putProductInCart } = useCart();
  const notifyAddProduct = () => {
    toast.success('Item adicionado ao carrinho');
  };

  return (
    <Container>
      <Image src={product.url} />
      <ContainerItens>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>{formatCurrency(product.price)}</PriceProduct>
        <Button
          onClick={() => {
            putProductInCart(product);
            notifyAddProduct();
          }}
        >
          Adicionar
        </Button>
      </ContainerItens>
    </Container>
  );
}
