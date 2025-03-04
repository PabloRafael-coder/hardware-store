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
  justify-content: space-between;
  border: none;
  border-radius: 15px;
  padding: 15px;
  width: 290px;
  height: 350px;
  background-color: #ffffff;
  margin: 15px;

  p {
    font-size: 15px;
    font-weight: 700;
  }

  span {
    margin-top: 5px;
    font-weight: 700;
    font-size: 24px;
    color: #ff8c00;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 15px;
  object-fit: contain;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  background-color: #1e90ff;
  color: #ffffff;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: #1e90ff;
  margin-top: 30px;
  font-size: 40px;
`;
