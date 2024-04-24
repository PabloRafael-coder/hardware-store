import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  width: 100%;
  padding: 35px 0 35px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 15px;
  width: 290px;
  height: 350px;
  background-color: #ffffff;
  margin: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 15px;
  object-fit: contain;
`;

export const Button = styled(Link)`
  width: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  background-color: #1e90ff;
  color: #ffffff;

  cursor: pointer;

  &:active {
    opacity: 0.6;
  }

  text-decoration: none;
  text-align: center;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: #1e90ff;
  margin-top: 30px;
  font-size: 40px;
`;
