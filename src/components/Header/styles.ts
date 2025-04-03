import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: min(80rem, (100% - 1.5rem * 2));
  margin: 0 auto;

  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media only screen and (max-width: 375px) {
    max-width: min(375px - 1.5rem * 2);
  }
`
export const LogoNavContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-right: auto;
`
export const HeaderLogo = styled.div`
  h1 {
    text-transform: uppercase;
    font-size: 1rem;
    color: ${(props) => props.theme['--base-title']};
  }

  span {
    color: ${(props) => props.theme['--white']};
    background: ${(props) => props.theme['--black']};
    padding: 0 0.25rem;
    border-radius: 4px;
  }
`
export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    list-style: none;

    a {
      text-decoration: none;
    }
  }

  @media (width <= 40rem) {
    display: none;
  }
`
export const IconContainer = styled.div`
  display: inline-flex;
  line-height: 0;
  gap: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`

export const ContentLink = styled(NavLink)`
  display: inline-flex;
  font-size: 0.875rem;
  color: ${(props) => props.theme['--base-link']};
  cursor: pointer;
`
