import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/Button.style';

export const CartDropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  top: 4rem;
  right: 1rem;
  width: 13rem;
  height: 20rem;
  background-color: white;
  border: 1px solid black;
  color: black;
  align-items: left;
  padding: 1rem;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    position: absolute;
    display: flex;

    bottom: 1rem;

    padding: 0.5rem 1rem;
  }
`;

export const Reminder = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 250px;
`;
