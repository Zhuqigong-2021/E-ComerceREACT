import styled from 'styled-components';
export const CartHeader = styled.div`
  display: flex;
  font-weight: 600;
  font-family: Arial;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-top: 1em;
  border-bottom: 1px solid black;
  height: 100%;
  div {
    transform: translate(-0.7em);
  }
  @media (max-width: 750px) {
    font-size: 10px;
  }
`;

export const CheckoutStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding-top: 6rem;
  align-items: center;
  width: 100%;

  @media (max-width: 499px) {
    padding: 1rem;
    padding-top: 4.5rem;
  }

  @media (min-width: 500px) and (max-width: 950px) {
    padding: 6rem 4rem;
  }
  .total {
    width: 100%;
    display: flex;
    font-weight: 600;
    border-bottom: 1px solid black;
    font-family: Arial;
    justify-content: flex-end;
  }
`;

export const CheckoutItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-bottom: 1.5rem;
`;
