import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useHistory } from 'react-router-dom'

import { useUser } from '@/hooks/UserContext'

import profileImage from '../../assets/profileImage.jpeg'
import { Button } from '../Button'
import { DropdownContent, DropdownItem, ImageContainer } from './style'

export function UserProfileModal() {
  const { logout } = useUser()
  const { push } = useHistory()

  return (
    <>
      <DropdownMenu.Trigger asChild>
        <ImageContainer>
          <img src={profileImage} alt="" />
        </ImageContainer>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownContent>
          <DropdownItem>Perfil do usuário</DropdownItem>
          <DropdownItem>Categorias</DropdownItem>
          <DropdownItem>Produtos</DropdownItem>
          <DropdownItem>Contatos</DropdownItem>
          <DropdownItem>
            <Button
              onClick={() => {
                logout()
                push('/')
              }}
            >
              Sair
            </Button>
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu.Portal>
    </>
  )
}
