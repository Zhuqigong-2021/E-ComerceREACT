import styled from 'styled-components';
export const CheckoutItemstyle = styled.div`
  // position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .arrow {
    cursor: pointer;
  }
  .value {
    margin: 0 10px;
  }
`;
export const CartItemImageContainer = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 100%;
  height: 200px;
  transform: scale(0.6);
`;

// export const DescriptionContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   margin-right: 8rem;
// `;
