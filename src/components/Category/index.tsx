import { CaretDown } from '@phosphor-icons/react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

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

interface CategoryProps {
  category: Category[]
  onActiveCategory: (categoryId: Category['id']) => void
}

export function Category({ category, onActiveCategory }: CategoryProps) {
  return (
    <NavigationMenu.List>
      <NavigationMenu.Item>
        <NavigationTrigger asChild>
          <ButtonContainer>
            <p>Departamentos</p>
            <CaretDown size={12} weight="fill" aria-hidden color="#ffffff" />
          </ButtonContainer>
        </NavigationTrigger>

        <NavigationContent>
          <CategoryList>
            {category &&
              category.map((category) => {
                return (
                  <ListItem key={category.id}>
                    <button onClick={() => onActiveCategory(category.id)}>
                      {category.name}
                    </button>
                  </ListItem>
                )
              })}
          </CategoryList>
        </NavigationContent>
      </NavigationMenu.Item>
    </NavigationMenu.List>
  )
}
