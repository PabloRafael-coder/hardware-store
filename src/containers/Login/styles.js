import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 50%;
`;

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 20px 50px;
  width: 60%;

  h1 {
    font-size: 40px;
    margin-bottom: 0;
    color: #00bfff;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding-left: 20px;
  width: 25vw;
  height: 40px;
  outline: none;
  border: ${props => (props.error ? '2px solid #ff0000' : 'none')};
  border-radius: 5px;
  font-size: 16px;
  background-color: rgb(240, 240, 240);
`;

export const Text = styled.p`
  margin-top: 20px;
  font-weight: 300;

  a {
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 3px;
  font-weight: 500;
  font-size: 15px;
  color: #ff0000;
`;
