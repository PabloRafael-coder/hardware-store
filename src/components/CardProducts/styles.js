import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 30px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 10px;
`;

export const Image = styled.img`
  width: 90%;
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

export const Button = styled.button``;
