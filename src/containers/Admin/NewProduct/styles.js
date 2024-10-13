import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: #565656;
    padding: 40px;
    border-radius: 10px;
  }
`;

export const Label = styled.p`
  color: #ffffff;
`;

export const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  border: none;
  min-width: 300px;
  padding-left: 10px;
  outline: none;
`;

export const LabelUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: ridge 1px #ffffff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  color: #ffffff;

  div {
    display: flex;
    align-items: center;
  }
`;

export const InputUpload = styled.input`
  width: 1px;
  opacity: 0;
`;
