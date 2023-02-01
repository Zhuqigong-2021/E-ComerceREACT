import styled from 'styled-components';

export const ProductCardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 500px;
  color: white;
  .favourite {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border: none;
    background-color: transparent;
    background-color: rgba(255, 255, 255, 0.2);
    // margin-left: 0.2rem;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    .heart {
      // color: #ef4444;
      color: rgba(255, 255, 255, 0.8);
    }
    .liked {
      color: #ef4444;
    }
  }
  .item {
    margin-left: 0.5rem;
    margin-top: 0.2rem;
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
  @media (min-width: 1201px) {
    height: 400px;
  }
  @media (max-width: 450px) {
    .item {
      font-size: 10px;
    }
    .price {
      font-size: 8px;
    }
    .heart,
    .liked {
      transform: scale(0.8);
    }
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
      // width:100%;
      display:block;
      position:absolute;
      bottom:0.2rem;
      right:0;
      
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
