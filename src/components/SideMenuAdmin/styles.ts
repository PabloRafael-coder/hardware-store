import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-width: 250px;
  background-color: gray;

  hr {
    border: solid 1px #efefef;
    margin: 30px 15px;
  }
`;

interface ItemContainerProps {
  isActive?: boolean
}

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  background-color: ${props =>
    props.isActive ? 'rgb(169, 169, 169, 0.8)' : 'none'};
`;

export const MenuNav = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
