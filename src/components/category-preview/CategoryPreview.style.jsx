import styled from 'styled-components';

export const CategoryPreviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 3rem 1rem;
  width: 100%;
  padding: 0 2rem;
  h2 {
    margin-bottom: 2rem;
  }
  .title {
    font-size: 28px;
    color: #059669;
    margin-bottom: 25px;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    margin: 1rem 0rem 2rem 0rem;
  }
  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: minMax(200px 1fr);
      padding: 0;
      font-size: 15px;
    }
  }
`;
