import { useEffect, useState } from 'react'

import LogoHome from '../../assets/home-logo.png'
import { CardProducts } from '../../components/CardProducts'
import { api } from '../../services/api'
import {
  Container,
  ImgContainer,
  Button,
  ContainerCategories,
  ContainerProducts,
  ContainerMain,
} from './styles'

export interface Products {
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

interface Categories {
  id: number
  name: string
  path: string
  createdAt: string
  updateAt: string
}

interface FilterProduct extends Products {}

interface ProductProps {
  location: {
    state: Products
  }
}

export function Product({ location: { state } }: ProductProps) {
  let categoryId = 0

  const [categories, setCategories] = useState<Categories[]>([])
  const [products, setProducts] = useState<Products[]>([])
  const [filterProduct, setFilterProduct] = useState<FilterProduct[]>([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  if (state?.category_id) {
    categoryId = state.category_id
  }

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function fetchProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }
    fetchProducts()
    fetchCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProduct(products)
    } else {
      const filterProductCategory = products.filter(
        (product) => product.category_id === activeCategory,
      )

      setFilterProduct(filterProductCategory)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ImgContainer src={LogoHome} alt="Logo da página principal" />
      <ContainerMain>
        <ContainerCategories>
          {categories.map((category) => (
            <Button
              type="button"
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
              isActiveColor={activeCategory === category.id}
            >
              {category.name}
            </Button>
          ))}
        </ContainerCategories>
        <div>
          <ContainerProducts>
            {filterProduct.map((product) => (
              <CardProducts key={product.id} product={product} />
            ))}
          </ContainerProducts>
        </div>
      </ContainerMain>
    </Container>
  )
}
