import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;

  flex: 1;
  justify-content: center;
  padding: 0 4rem;

  align-items: stretch;
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
export default HomeContainer;
