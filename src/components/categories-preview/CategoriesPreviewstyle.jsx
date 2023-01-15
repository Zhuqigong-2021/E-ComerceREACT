import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 4rem 30px 4rem;
  padding-top: 4rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
  @media (max-width: 500px) {
    margin: 0 0rem 30px 0rem;
  }
`;
