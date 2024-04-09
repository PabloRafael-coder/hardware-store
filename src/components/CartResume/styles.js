import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 40vh;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 10px 3rem;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);

  .container-items-upper {
    display: grid;
    grid-gap: 1rem 3rem;
    grid-template-areas:
      'items-upper-title items-upper-title'
      'items-upper-items items-upper-price'
      'items-upper-rate items-upper-priceDelivery';
  }

  .items-upper-title {
    grid-area: items-upper-title;
  }

  .items-upper-items {
    grid-area: items-upper-items;
  }

  .items-upper-price {
    grid-area: items-upper-price;
  }

  .items-upper-rate {
    grid-area: items-upper-rate;
  }

  .items-upper-priceDelivery {
    grid-area: items-upper-priceDelivery;
  }

  .container-items-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ContainerItems = styled.div``;
