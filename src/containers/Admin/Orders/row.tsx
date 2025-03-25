import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import { api } from '../../../services/api'
import status from './order-status'
import { ImageTable, ReactSelectStyles } from './styles'
import type { Orders } from '.'

interface RowProps {
  row: {
    date: string
    name: string
    orderId: string
    status: string

    products: {
      category: string
      id: number
      name: string
      price: number
      quantity: number
      url: string
      _id: string
    }[]
  }

  orders: Orders[]
  onOrderStatusUpdate: (item: Orders[]) => void
}

function Row({ row, orders, onOrderStatusUpdate }: RowProps) {
  const [open, setOpen] = useState(false)

  async function handleOrderStatusChange(
    id: RowProps['row']['orderId'],
    status: RowProps['row']['status'],
  ) {
    try {
      await api.put(`orders/${id}`, { status })

      const updatingOrders = orders.map((order) => {
        return order._id === id ? { ...order, status } : order
      })

      onOrderStatusUpdate(updatingOrders)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <ReactSelectStyles
            options={status.filter((status) => status.id !== 1)}
            menuPortalTarget={document.body}
            placeholder="Status"
            defaultValue={status.find(
              (options) => options.value === row.status,
            )}
            onChange={(selectedOption: any) => {
              handleOrderStatusChange(row.orderId, selectedOption.value)
            }}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>
                        <ImageTable
                          src={productRow.url}
                          alt="imagem do produto"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Row
