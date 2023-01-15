import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin: 1rem 4rem 3rem 4rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 2rem 3rem 2rem;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    margin: 1rem 4rem 3rem 4rem;
  }
`;

export const CategoryTitle = styled.div`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  color: #059669;
  @media (max-width: 800px) {
    margin-top: 1rem;
    font-size: 25px;
  }
  @media (max-width: 500px) {
    margin-top: 1rem;
    font-size: 20px;
  }
`;
export const CategoryPageStyle = styled.div`
  padding-top: 4rem;
`;
