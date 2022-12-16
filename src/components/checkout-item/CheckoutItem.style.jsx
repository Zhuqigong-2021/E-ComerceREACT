import styled from 'styled-components';
export const CheckoutItemstyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 240px;
  border: 1px solid red;
  margin-bottom: 2rem;
  .arrow {
    cursor: pointer;
  }
  .value {
    margin: 0 10px;
  }
`;
export const CartItemImageContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 10%;
  height: 50%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 8rem;
`;
