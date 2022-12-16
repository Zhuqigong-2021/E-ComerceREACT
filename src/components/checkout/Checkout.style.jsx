import styled from 'styled-components';
export const CartHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;

  border-bottom: 1px solid black;
  height: 100%;
`;

export const CheckoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border: 1px solid purple;
`;

export const CheckoutItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 2rem;
`;
