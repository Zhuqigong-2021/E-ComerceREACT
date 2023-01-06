import styled from 'styled-components';

export const CartIconStyle = styled.div`
  &.bounce {
    animation: bounce 1s ease-in-out 1 forwards;
    transform-origin: center center;
    @keyframes bounce {
      from {
        transform: rotate(15deg);
        color: #047857;
      }
      50% {
        transform: rotate(-15deg);
        color: red;
      }
      to {
        transform: rotate(0deg);
        color: #047857;
      }
    }
  }
  &.bounce_again {
    animation: bounceAgain 1s ease-in-out 1 forwards;
    transform-origin: center center;
    @keyframes bounceAgain {
      from {
        transform: rotate(15deg);
        color: #047857;
      }
      50% {
        transform: rotate(-15deg);
        color: red;
      }
      to {
        transform: rotate(0deg);
        color: #047857;
      }
    }
  }
  position: relative;

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
  }
  &:hover {
    cursor: pointer;
  }
`;
