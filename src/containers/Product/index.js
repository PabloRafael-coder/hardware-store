import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import LogoHome from '../../assets/home-logo.png';
import { CardProducts } from '../../components/CardProducts';
import { api } from '../../services/api';
import {
  Container,
  ImgContainer,
  Button,
  ContainerCategories,
  ContainerProducts,
  ContainerMain
} from './styles';

export function Product({ location: { state } }) {
  let categoryId = 0;

  if (state?.categoryId) {
    categoryId = state.categoryId;
  }

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryId);

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
      setFilterProduct(products);
    } else {
      const filterProductCategory = products.filter(
        product => product.category_id === activeCategory
      );

      setFilterProduct(filterProductCategory);
    }
  }, [activeCategory, products]);

  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <ContainerMain>
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
        <div>
          <ContainerProducts>
            {filterProduct.map(product => (
              <CardProducts key={product.id} product={product} />
            ))}
          </ContainerProducts>
        </div>
      </ContainerMain>
    </Container>
  );
}

Product.propTypes = {
  location: PropTypes.object
};
