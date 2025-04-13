import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

export const NavigationTrigger = styled(NavigationMenu.Trigger)``

export const ButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  padding: 0 1rem;
  background: ${(props) => props.theme['--black']};
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  p {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme['--white']};
  }

  &[data-state='open'] > svg {
    transform: rotate(180deg);
    transition: transform 1s;
  }

  svg {
    transition: transform 1s;
  }
`
export const NavigationContent = styled(NavigationMenu.Content)`
  position: absolute;
  width: 15rem;
  padding: 0.25rem;
  top: 25px;

  border: 1px solid ${(props) => props.theme['--base-border']};
  border-radius: 4px;

  background: ${(props) => props.theme['--white']};
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
`
export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
`
export const ListItem = styled.li`
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid transparent;
  color: ${(props) => props.theme['--base-link']};

  button {
    width: 100%;
    border: none;
    background: none;
    padding: 0.5rem;
    cursor: pointer;
    text-align: start;
  }

  &:hover {
    background: ${(props) => props.theme['--base-hover']};
    border: 1px solid ${(props) => props.theme['--base-border']};
  }
`
