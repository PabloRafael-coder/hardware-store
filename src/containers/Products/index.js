import React, { useEffect, useState } from 'react';

import LogoHome from '../../assets/home-logo.png';
import Category from '../../components/Category';
import { api } from '../../services/api';
import {
  Container,
  ImgContainer,
  Button,
  ContainerCategories,
  ContainerProducts
} from './styles';

function Product() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [colorMenu, setColorMenu] = useState(0);
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'todas' }, ...data];

      setCategories(newCategories);
    }

    async function fetchProducts() {
      const { data } = await api.get('products');
      setProducts(data);
    }
    fetchProducts();
    fetchCategories();
  }, []);

  console.log(colorMenu);

  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <ContainerCategories>
        {categories.map(category => (
          <Button
            type="button"
            key={category.id}
            onClick={() => {
              setColorMenu(category.id);
            }}
            isActiveColor={colorMenu === category.id}
          >
            {category.name}
          </Button>
        ))}
      </ContainerCategories>
      <ContainerProducts>{products.map(products => {})}</ContainerProducts>
    </Container>
  );
}

export default Product;
