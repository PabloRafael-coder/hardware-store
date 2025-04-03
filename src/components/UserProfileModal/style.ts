import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled from 'styled-components'

export const ImageContainer = styled.button`
  display: inline-flex;
  border: none;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  width: 45px;
  height: 45px;
  background-color: #d4d4d8;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`
export const DropdownContent = styled(DropdownMenu.Content)`
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  background-color: ${(props) => props.theme['--gray-100']};
`
export const DropdownItem = styled(DropdownMenu.Item)`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  outline: none;

  color: ${(props) => props.theme['--base-link']};

  &:hover {
    background: ${(props) => props.theme['--base-hover']};
    border: 1px solid ${(props) => props.theme['--base-border']};
  }
`
