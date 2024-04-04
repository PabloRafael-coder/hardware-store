import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid black;
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
