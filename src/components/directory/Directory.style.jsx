import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  position: relative;

  border: 1px solid grey;
  padding: 1rem, 1rem;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  h4 {
    margin: 0.5rem 0.5rem;
    font-family: sans-serif;
  }
  .greeting {
    position: absolute;
    top: 4rem;
    // color: black;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
  }

  // @media (max-width: 500px) {
  //   margin-top: 2rem;
  //   padding-top: 5rem;
  //   flex-direction: column;
  //   .greeting {
  //     top: 3.5rem;
  //   }
  // }
  // @media (orientation: landscape) {
  //   margin-top: 1rem;
  // }
  // @media only screen and (max-width: 580px) and (min-width: 501px) {
  //   margin-top: 0rem;
  //   padding-top: 6rem;
  //   .greeting {
  //     top: 4rem;
  //   }
  // }
`;
