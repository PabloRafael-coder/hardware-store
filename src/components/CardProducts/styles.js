import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Image = styled.img`
  width: 50%;
  object-fit: contain;
  border-radius: 10px;
`;

export const NameProduct = styled.p`
  font-size: 14px;
  font-weight: 500;
  word-break: break-all;
`;

export const PriceProduct = styled.p`
  font-weight: 700;
  color: orange;
`;
