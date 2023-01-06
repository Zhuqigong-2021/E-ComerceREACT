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
  top: 4.5rem;
  right: 4rem;
  width: 13rem;
  height: 20rem;
  background-color: white;
  @media (max-width: 500px) {
    right: 2rem;
  }
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  color: black;
  align-items: left;
  padding: 1rem;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: 2.5rem;

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
  overflow-y: auto;
  height: 250px;
`;
