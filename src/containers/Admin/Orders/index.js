import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import { api } from '../../../services/api';
import { Container } from './styles';

function Orders() {
  const [orders, setOrders] = useState([]);

  console.log(orders);
  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await api.get('orders');
      setOrders(data);
    };
    fetchOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createAt,
      status: order.status,
      products: order.products
    };
  }

  return (
    <Container>
      <h1>Pedidos</h1>
    </Container>
  );
}
export default Orders;
