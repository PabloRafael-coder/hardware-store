import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 1rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['--base-border']};
`

export const IconContainer = styled.div`
  display: inline-flex;
  justify-content: end;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme['--base-link']};

    &:hover {
      color: red;
    }
  }
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border-radius: 4px;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;

    span {
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme['--base-title']};
    }
  }

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 4px;
  }
`
export const ProductName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme['--gray-600']};
`
export const ProductPrice = styled.p`
  font-weight: 700;
  color: ${(props) => props.theme['--black']};
`
