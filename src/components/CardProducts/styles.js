import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 10px;
`;

export const NameProduct = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const PriceProduct = styled.p`
  font-weight: 700;
  color: orange;
`;
