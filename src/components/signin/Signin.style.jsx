import styled from 'styled-components';

export const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  height: 100vh;
  .signin__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    padding: 2rem;
    row-gap: 2rem;
    align-items: flex-start;
    margin-bottom: 5rem;
    input {
      border: none;
      outline: none;
      width: 100%;
      border-bottom: 1px solid black;
      &:focus {
        border: none;
        border-bottom: 1px solid black;
      }
    }
    .signin__group {
      display: flex;
      column-gap: 1rem;
    }
  }
`;
