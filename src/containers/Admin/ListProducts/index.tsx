import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import { api } from '../../../services/api'
import { formatCurrency } from '../../../utils/formatCurrency'
import {
  Container,
  ContainerItems,
  ProductImage,
  EditSharpIconStyles,
} from './styles'

interface ProductsList {
  id: number
  name: string
  price: number
  url: string
  offer: boolean
}

function ListProducts() {
  const { push } = useHistory()

  const [products, setProducts] = useState<ProductsList[]>([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')
      setProducts(data)
    }

    loadProducts()
  }, [])

  function ChangeIconProductOffer(offer: boolean) {
    if (offer) {
      return <CheckBoxIcon style={{ color: '#006400' }} />
    }
    return <DisabledByDefaultRoundedIcon style={{ color: '#8B0000' }} />
  }

  function editProduct(product: ProductsList) {
    push(paths.EditProduct, { product })
  }

  return (
    <Container>
      <ContainerItems>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="center">Preço</TableCell>
                <TableCell align="center">Oferta</TableCell>
                <TableCell align="center">Imagem</TableCell>
                <TableCell>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatCurrency(product.price)}
                  </TableCell>
                  <TableCell align="center">
                    {ChangeIconProductOffer(product.offer)}
                  </TableCell>
                  <TableCell align="center">
                    <ProductImage src={product.url} />
                  </TableCell>
                  <TableCell>
                    <EditSharpIconStyles
                      onClick={() => {
                        editProduct(product)
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContainerItems>
    </Container>
  )
}

export default ListProducts
