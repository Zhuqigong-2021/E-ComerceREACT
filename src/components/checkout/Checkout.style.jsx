import styled from 'styled-components';
export const CartHeader = styled.div`
  display: flex;
  font-weight: 600;
  font-family: Arial;
  justify-content: space-around;
  width: 60%;
  margin-top: 1em;
  border-bottom: 1px solid black;
  height: 100%;
  div {
    transform: translate(-0.7em);
  }
`;

export const CheckoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .total{
    width:60%;
    display:flex;
    font-weight: 600;
    border-bottom:1px solid black;
  font-family: Arial;
    justify-content:flex-end;
  }


  }
`;

export const CheckoutItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 1.5rem;
`;
