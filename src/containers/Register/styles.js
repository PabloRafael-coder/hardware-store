import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ContainerImg = styled.img`
  object-fit: contain;
  width: 40%;
`;

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px 50px;
  width: 100%;

  h1 {
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
