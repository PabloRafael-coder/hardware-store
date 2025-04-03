import { CaretDown } from '@phosphor-icons/react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import {
  ButtonContainer,
  CategoryList,
  ListItem,
  NavigationContent,
  NavigationTrigger,
} from './styles'

interface Category {
  id: number
  name: string
}

export function Category() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    fetchCategories()
  }, [])

  return (
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationTrigger asChild>
          <ButtonContainer>
            <p>Categorias</p>
            <CaretDown size={12} weight="fill" aria-hidden />
          </ButtonContainer>
        </NavigationTrigger>

        <NavigationContent>
          <CategoryList>
            {categories &&
              categories.map((item) => (
                <ListItem key={item.id}>
                  <p>{item.name}</p>
                </ListItem>
              ))}
          </CategoryList>
        </NavigationContent>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
