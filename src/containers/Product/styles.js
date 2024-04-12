import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #d3d3d3;
`;

export const ContainerCategories = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  background-color: #ffffff;
  padding: 30px;
  margin-right: 3rem;
  border-radius: 5px;
  gap: 2rem;
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

export const Button = styled.button`
  border: none;
  background: none;
  font-size: 0.9rem;
  font-weight: ${props => (props.isActiveColor ? '700' : '')};
  text-transform: uppercase;
  color: ${props => (props.isActiveColor ? '#ffffff' : '')};
  background-color: ${props => props.isActiveColor && ' #00bfff'};
  border-radius: 5px;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImgContainer = styled.img`
  width: 100%;
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  gap: 30px;
  justify-content: center;
`;
