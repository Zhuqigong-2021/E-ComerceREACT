import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  position: relative;
  margin-top: 4rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .greeting {
    position: absolute;
    top: -2rem;
    color: black;
    text-transform: uppercase;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    flex-direction: column;
  }
  @media (orientation: landscape) {
    margin-top: 1rem;
  }
  @media (max-width: 580px) &(min-width:500px) {
    margin-top: 0rem;
  }
`;
