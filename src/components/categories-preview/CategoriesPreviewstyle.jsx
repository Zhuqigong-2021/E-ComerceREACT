import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem 7rem 30px 5rem;
  padding-top: 4rem;

  .filter {
    display: flex;
  }

  @media screen and (max-width: 800px) {
    align-items: center;

    .filter {
      position: absolute;
      left: 1rem;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
  @media screen and (max-width: 1200px) {
    margin: 1rem 3rem 30px 3rem;
  }

  @media (max-width: 500px) {
    margin: 0 0rem 30px 0rem;

    .filter {
      font-size: 12px;
    }
  }
  @media (max-width: 370px) {
    .filter {
      display: flex;
      justify-content: space-between;
    }
  } ;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 370px) {
    margin-top: 1.3rem;
  }
`;
