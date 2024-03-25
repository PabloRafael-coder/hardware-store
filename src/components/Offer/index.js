import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';

import { api } from '../../services/api';
import { formatCurrency } from '../../utils/currency';
import {
  Container,
  H1,
  ContainerItens,
  Image,
  Button,
  ContainerText
} from './styles';

export function Offer() {
  const [offer, setOffer] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('products');

      const offerTrue = data.filter(products => products.offer);

      setOffer(offerTrue);
    }

    fetchCategories();
  }, []);

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 }
  ];

  return (
    <Container>
      <H1>Ofertas</H1>
      <Carousel
        itemsToShow={3}
        breakPoints={breakpoints}
        style={{ width: '90%' }}
      >
        {offer.map(products => (
          <ContainerItens key={products.id}>
            <Image src={products.url} />
            <ContainerText>
              <p>{products.name}</p>
              <span>{formatCurrency(products.price)}</span>
            </ContainerText>
            <Button>Comprar</Button>
          </ContainerItens>
        ))}
      </Carousel>
    </Container>
  );
}
