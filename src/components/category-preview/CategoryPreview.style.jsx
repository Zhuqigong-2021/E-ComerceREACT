import styled from 'styled-components';

export const CategoryPreviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 3rem 1rem;
  h2 {
    margin-bottom: 2rem;
  }
  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;
