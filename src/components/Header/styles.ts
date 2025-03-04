import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  background-color: #ffffff;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 4rem;
`;

interface PageLinkProps {
  isActive?: boolean
}

export const PageLink = styled.a<PageLinkProps>`
  cursor: pointer;
  font-weight: ${props => (props.isActive ? '700' : '')};
  color: ${props => (props.isActive ? '#1E90FF' : '#696969')};
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const DivisionLine = styled.div`
  border-right: 0.5px solid silver;
  height: 2.5rem;
`;
