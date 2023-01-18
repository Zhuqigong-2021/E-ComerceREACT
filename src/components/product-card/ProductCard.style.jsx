import styled from 'styled-components';

export const ProductCardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 500px;
  color: white;
  .item {
    margin-left: 0.5rem;
  }
  .price {
    margin-top: 0.2rem;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1200px) {
    height: 250px;
  }
  @media (max-width: 300px) {
    height: 200px;
  }
`;
export const ProductInfo = styled.div`

 position: absolute;
   height:30%;
   
  bottom: 0;
  left: 0;
  right:0;
  display: flex;
  flex-direction: column;
  justify-items:stretch; 
  justify-content:flex-start;
  
  background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0.1));
 
    .cardbtn {
      width:100%;
      display:block;
      position:absolute;
      bottom:0;
      
      color: white;
      border: 0;
      background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0.7)); 

      &:hover{
        color:white;
        background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0.1));
        background-color:none;
        cursor:pointer;
      }
    }
    @media (min-width:1200px){
      height:17%;
    }
  }
`;
