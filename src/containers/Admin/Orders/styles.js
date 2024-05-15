import ReactSelect from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d9d9d9ad;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
`;

export const ImageTable = styled.img`
  width: 190px;
`;

export const ReactSelectStyles = styled(ReactSelect)`
  width: 250px;
  .css-13cymwt-control {
    cursor: pointer;
  }
`;

export const MenuStatus = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  gap: 3rem;
`;

export const LinkMenuStatus = styled.a`
  cursor: pointer;
  color: ${props => (props.isActive ? '#1E90FF' : 'black')};
  font-weight: ${props => (props.isActive ? '700' : '400')};
  border-bottom: ${props => (props.isActive ? '2px solid #1E90FF' : '')};
`;
