import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin: 1rem 4rem 3rem 4rem;
`;

export const CategoryTitle = styled.div`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
