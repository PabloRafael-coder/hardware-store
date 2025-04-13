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
  display: inline-flex;
  gap: 1rem;
  border-radius: 0.25rem;
`
export const CategoryButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme['--base-border']};

  @media screen and (max-width: 48rem) {
    display: none;
  }
`

interface CaterogyButtonProps {
  isActiveColor: boolean
}

export const CaterogyButton = styled.button<CaterogyButtonProps>`
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-top: 3rem;
  gap: 1rem;
`
