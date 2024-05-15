import React, { useState, useEffect } from 'react';

import { api } from '../../../services/api';
import { Container } from './styles';

function NewProduct() {
  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <div>Ok</div>
    </Container>
  );
}

export default NewProduct;
