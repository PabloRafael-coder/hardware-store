import { useEffect, useState } from 'react'

import { ProductCard } from '../../components/ProductCard'
import { api } from '../../services/api'
import {
  CategoriesContainer,
  CategoryButtonContainer,
  CaterogyButton,
  ItemsContainer,
  ProductContainer,
  ProductGrid,
} from './styles'

interface Category {
  id: number
  name: string
}

export interface Products {
  id: number
  name: string
  price: number
  offer: boolean
  path: string
  url: string
  category_id: number
  createdAt: string
  updatedAt: string
  category: Category
}

export function Product() {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Products[]>([])
  const [activeCategory, setActiveCategory] = useState<number>(0)

  const filteredProduct =
    activeCategory === 0
      ? products
      : products.filter((item) => item.category_id === activeCategory)

  useEffect(() => {
    async function getCategories() {
      const { data } = await api.get('/categories')

      setCategories([{ id: 0, name: 'Departamentos' }, ...data])
    }

    async function getProducts() {
      const { data } = await api.get('/products')

      setProducts(data)
    }

    getProducts()
    getCategories()
  }, [])

  return (
    <ProductContainer>
      <ItemsContainer>
        <CategoriesContainer>
          <CategoryButtonContainer>
            {categories &&
              categories.map((category) => (
                <CaterogyButton
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                  }}
                  isActiveColor={activeCategory === category.id}
                >
                  {category.name}
                </CaterogyButton>
              ))}
          </CategoryButtonContainer>
        </CategoriesContainer>
        <div>
          <ProductGrid>
            {filteredProduct &&
              filteredProduct.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </ProductGrid>
        </div>
      </ItemsContainer>
    </ProductContainer>
  )
}
