import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['--black']};
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.theme['--gray-100']};
  width: 100%;

  &:hover {
    transition: 2s;
    opacity: 0.8;
  }
`
