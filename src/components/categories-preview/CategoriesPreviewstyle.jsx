import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 30px 4rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;
