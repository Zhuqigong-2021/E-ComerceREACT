import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  padding-top: 8rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .greeting {
    position: absolute;
    top: 4rem;
    color: black;
    text-transform: uppercase;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    padding-top: 5rem;
    flex-direction: column;
    .greeting {
      top: 3.5rem;
    }
  }
  @media (orientation: landscape) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 580px) and (min-width: 501px) {
    margin-top: 0rem;
    padding-top: 6rem;
    .greeting {
      top: 4rem;
    }
  }
`;
