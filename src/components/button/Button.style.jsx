import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/Spinner.style';

export const BaseButton = styled.button`
  padding: 0.5rem 1rem;

  background-color: #059669;
  border: none;
  outline: none;
  color: white;
  border-radius: 2px;
  align-items: center;
  &:hover {
    background-color: #047857;
    box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: black;
  width: 100%;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);

  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);

  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 15px;
  height: 15px;
`;

// export const Buttoncontainer = styled.button`
//   &.google-sign-in {
//     background-color: black;

//     box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
//   }
//   &.inverted {
//     background-color: white;
//     color: black;
//     border: 1px solid black;
//     box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
//   }
//   &.inverted:hover {
//     background-color: rgb(255, 255, 255);
//     box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
//   }
//   &.google-sign-in:hover {
//     background-color: rgb(0, 0, 0, 0.9);
//     box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
//   }
// `;
