import styled from 'styled-components';
// import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: green;
  border: none;
  outline: none;
  color: white;
  border-radius: 2px;
  &:hover {
    background-color: darkgreen;
    box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: black;

  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);

  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
  }
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
  }
`;

// export const ButtonSpinner = styled(SpinnerContainer)`
//   width: 30px;
//   height: 30px;
// `;

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
