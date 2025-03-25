import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'

import { api } from '../../../services/api'
import { formatDate } from '../../../utils/formatDate'
import status from './order-status'
import Row from './row'
import { Container, MenuStatus, LinkMenuStatus } from './styles'

export interface Orders {
  User: {
    id: string
    name: string
  }

  products: {
    id: number
    name: string
    category: string
    price: number
    quantity: number
    url: string
    _id: string
  }[]

  status: string
  createdAt: string
  updatedAt: string
  __v: number
  _id: string
}

interface OrdersInRow {
  name: string
  orderId: string
  date: string
  status: string
  products: {
    id: number
    name: string
    category: string
    price: number
    quantity: number
    url: string
    _id: string
  }[]
}

interface StatusProps {
  id: number
  value: string
  label: string
}

function Orders() {
  const [orders, setOrders] = useState<Orders[]>([])
  const [filteredOrders, setFilteredOrders] = useState<Orders[]>([])
  const [ordersInRows, setOrdersInRows] = useState<OrdersInRow[]>([])
  const [isActive, setIsActive] = useState(1)

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await api.get('/orders')
      setOrders(data)
      setFilteredOrders(data)
    }
    fetchOrders()
  }, [])

  useEffect(() => {
    const modifiedOrders = filteredOrders.map((order) => {
      return {
        name: order.User.name,
        orderId: order._id,
        date: formatDate(order.createdAt),
        status: order.status,
        products: order.products,
      }
    })

    setOrdersInRows(modifiedOrders)
  }, [filteredOrders])

  useEffect(() => {
    if (isActive === 1) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex((status) => status.id === isActive)
      const filteredOrders = orders.filter(
        (order) => order.status === status[statusIndex].value,
      )
      setFilteredOrders(filteredOrders)
    }
  }, [orders, isActive])

  function fetchOrdersFiltered(status: StatusProps) {
    if (status.id === 1) {
      setFilteredOrders(orders)
    } else {
      const orderFiltered = orders.filter(
        (order) => order.status === status.value,
      )
      setFilteredOrders(orderFiltered)
    }

    setIsActive(status.id)
  }

  function handleOrderStatusUpdate(item: Orders[]) {
    setOrders(item)
  }

  return (
    <Container>
      <MenuStatus>
        {status.map((status) => (
          <LinkMenuStatus
            onClick={() => fetchOrdersFiltered(status)}
            key={status.id}
            isActive={isActive === status.id}
          >
            {status.label}
          </LinkMenuStatus>
        ))}
      </MenuStatus>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedidos</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersInRows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                onOrderStatusUpdate={handleOrderStatusUpdate}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Orders
