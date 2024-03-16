import React, { useEffect, useState } from 'react';

import LogoHome from '../../assets/home-logo.png';
import Category from '../../components/Category';
import { api } from '../../services/api';
import { Container, ImgContainer, Button, ContainerCategories } from './styles';

function Product() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'todas' }, ...data];
      setCategories(newCategories);
    }

    fetchCategories();
  }, []);

  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <ContainerCategories>
        {categories.map(category => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </ContainerCategories>
    </Container>
  );
}

export default Product;
