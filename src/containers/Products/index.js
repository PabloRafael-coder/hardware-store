import React, { useEffect, useState } from 'react';

import LogoHome from '../../assets/home-logo.png';
import CardProducts from '../../components/CardProducts';
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
  const [filterProducts, setFilterProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];

      setCategories(newCategories);
    }

    async function fetchProducts() {
      const { data } = await api.get('products');
      setProducts(data);
    }
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products);
    } else {
      const filteredProduct = products.filter(
        product => product.category_id === activeCategory
      );
      console.log(filteredProduct);
      setFilterProducts(filteredProduct);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <ContainerCategories>
        {categories.map(category => (
          <Button
            type="button"
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
            }}
            isActiveColor={activeCategory === category.id}
          >
            {category.name}
          </Button>
        ))}
      </ContainerCategories>
      <ContainerProducts>
        {filterProducts.map(product => (
          <CardProducts key={product.id} product={product} />
        ))}
      </ContainerProducts>
    </Container>
  );
}

export default Product;
