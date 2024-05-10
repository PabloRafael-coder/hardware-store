import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  background-color: #00bfff;

  hr {
    border: solid 1px #efefef;
    margin: 30px 15px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  background-color: rgb(169, 169, 169, 0.8);
`;

export const MenuNav = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
