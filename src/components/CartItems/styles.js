import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  margin: auto;
  margin-top: 30px;
  gap: 20px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  font-weight: 700;
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  width: 100%;

  img {
    width: 150px;
  }

  .quantifyGrid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .ButtonNegative {
    font-size: 32px;
  }

  button {
    border: none;
    background: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Empty = styled.p`
  text-align: center;
  font-weight: 700;
`;
