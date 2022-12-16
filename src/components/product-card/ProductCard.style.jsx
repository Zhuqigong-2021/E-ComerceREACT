import styled from 'styled-components';

export const ProductCardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 500px;
  color: white;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;
