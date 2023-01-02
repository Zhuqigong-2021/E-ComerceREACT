import styled from 'styled-components';

export const CartIconStyle = styled.div`
  // position: absolute;
  // right: 1rem;
  position: relative;
  // border: 1px solid black;
  width: 20px;
  height: 20px;
  align-items: center;
  display: inline-block;
  margin-left: 2rem;
  .shopping_bag {
    position: absolute;
    transform: scale(2.3);
    transform-origin: center;
    color: #059669;
  }
  .count {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 15px;
    transform: translate(-70%, -30%);
    color: #047857;
  }
`;
