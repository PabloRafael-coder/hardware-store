import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container } from './styles'

interface AdminProps {
  match: {
    path: string
  }
}

export function Admin({ match: { path } }: AdminProps) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      {path === paths.Order && <Orders />}
      {path === paths.Product && <ListProducts />}
      {path === paths.NewProduct && <NewProduct />}
      {path === paths.EditProduct && <EditProduct />}
    </Container>
  )
}
