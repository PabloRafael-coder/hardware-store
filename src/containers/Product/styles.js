import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d3d3d3;
`;

export const ContainerCategories = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
  gap: 2rem;
`;

export const ContainerMain = styled.div`
  display: flex;
  margin: 30px 0 0 30px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: ${props => (props.isActiveColor ? '700' : '')};
  text-transform: uppercase;
  border-bottom: ${props => props.isActiveColor && '3px solid purple'};
  color: ${props => (props.isActiveColor ? '#ffffff' : '')};
  background-color: ${props => props.isActiveColor && 'purple'};
  line-height: 40px;
  cursor: pointer;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 70vh;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 0 30px;
  justify-content: center;
`;
