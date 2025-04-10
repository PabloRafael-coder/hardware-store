import { Bell, ShoppingBagOpen } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { NavLink } from 'react-router-dom'

import { UserProfileModal } from '../UserProfileModal'
import {
  ContentLink,
  HeaderContainer,
  HeaderLogo,
  IconContainer,
  LogoNavContainer,
  NavList,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <LogoNavContainer>
        <HeaderLogo>
          <h1>
            <span>Hardware</span>
            Store
          </h1>
        </HeaderLogo>

        <nav>
          <NavList>
            <li>
              <ContentLink to="/">Home</ContentLink>
            </li>
            <li>
              <ContentLink to="/produtos">Produtos</ContentLink>
            </li>
          </NavList>
        </nav>
      </LogoNavContainer>

      <IconContainer>
        <button>
          <Bell size={22} color="#71717a" />
        </button>
        <NavLink to="/carrinho">
          <ShoppingBagOpen size={22} color="#71717a" />
        </NavLink>
      </IconContainer>

      <DropdownMenu.Root>
        <UserProfileModal />
      </DropdownMenu.Root>
    </HeaderContainer>
  )
}
