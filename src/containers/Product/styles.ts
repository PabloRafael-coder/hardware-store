import styled from 'styled-components'

export const ProductContainer = styled.main`
  max-width: min(80rem, (100% - 1.5rem * 2));
  margin: 0 auto;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoriesContainer = styled.div`
  width: 100%;
  display: inline-flex;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
`

interface CartButtonProps {
  isActiveColor: boolean
}

export const CartButton = styled.button<CartButtonProps>`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  background: none;
  border-radius: 4px;
  color: ${(props) =>
    props.isActiveColor
      ? props.theme['--gray-100']
      : props.theme['--base-link']};
  background-color: ${(props) => props.isActiveColor && props.theme['--black']};
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      !props.isActiveColor && props.theme['--base-hover']};
  }
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
  gap: 1rem;
`
