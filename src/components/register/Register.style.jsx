import styled from 'styled-components';

export const RegisterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;

  width: 100vw;
  @media (max-width: 500px) {
    padding: 1rem;
  }

  .register__form {
    margin-top: 4rem;
    display: flex;
    background-color: rgba(10, 200, 25, 0.1);

    height: 100%;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    padding: 2rem;
    row-gap: 2rem;
    align-items: flex-start;
    margin-bottom: 5rem;
    @media (max-width: 500px) {
      roow-gap: 0.5rem;
    }
    input {
      border: none;
      width: 100%;
      border-bottom: 1px solid black;
      background-color: inherit;
      &:focus {
        outline: none;
        border: none;
        border-bottom: 1px solid black;
      }
    }
    .signup__group {
      display: flex;
      column-gap: 1rem;
      @media (max-width: 500px) {
        flex-direction: column;
        row-gap: 1rem;
        justify-items: stretch;
        width: 100%;
      }
    }
  }
`;
