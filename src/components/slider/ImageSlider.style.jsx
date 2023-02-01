import styled from 'styled-components';
export const SliderStyle = styled.div`
  
  width: 100%;
  height:100%;
  
  min-height:100vh;
  position: fixed;
  top:0;
  bottom:0; 
  .styleOverflowStyle {
    overflow-x: hidden;
    height: 100%;
    
  }
  .left {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3rem;
    left: 0;
    color: white;

    height: calc(43%);
    font-size: 40px;

    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    @media (max-width: 500px){
      transform:scale(0.8);
    }
    @media (max-width: 400px){
      transform:scale(0.5);
    }
  }
  .right {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3rem;
    right: 0;
    color: white;

    height: calc(43%);
    font-size: 40px;

    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    @media (max-width: 500px){
      transform:scale(0.8);
    }
    @media (max-width: 400px){
      transform:scale(0.5);
    }
  }

  .sliderTitle {
    color: white;
    z-index: 20;
    font-size: 40px;
    position: relative;
    font-family: sans-serif;
    top: 20%;
    left: 20%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 650px) {
      left: 10%;
      font-size: 30px;
    }
    @media (max-width: 500px) {
      left: 0;
      justify-content: center;
      font-size: 28px;
      margin: 0rem 0.5rem;
    }
    @media (max-width: 400px) {
      left: 0;
      justify-content: center;
      font-size: 24px;
      margin: 0rem 0.5rem;
    }
  }
  }
  .substyle {
    color: white;
    z-index: 20;
    font-size: 20px;
    position: relative;
    font-family: sans-serif;
    top: 23%;
    left: 20%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 650px) {
      left: 10%;
      font-size: 15px;
    }
    @media (max-width: 500px) {
      left: 0;
      justify-content: center;
      font-size: 15px;
      margin: 0rem 0.5rem;
    }

  }
  .slidertwo{
    position:fixed;
    display:flex;
    top:28%;
    left:20%;
    color:white;
    gap:1rem;
    font-size:30px; 
    font-weight:600;
    font-family:sans-serif;
    text-transform:uppercase;   
    @media (max-width: 650px) {
      left: 10%;
      
    }
    @media (max-width: 500px) {
      left: 0;
      justify-content: center;
      font-size: 15px;
      margin: 0rem 0.5rem;
    }
    
  }
  .sliderOneBtn {
  
    
    position: absolute; 
    font-family: sans-serif;
    margin:0; 
    display: flex;
    top: 38%;
    left: 22%;
    flex-wrap: wrap;
    background-color: white;
    color: black;
    
   &:hover{
    color:black;
    box-shadow: 0 0 3px #6dd6c4;
   }
    background-color: #6dd6c4;
    box-shadow: 0 0 10px #6dd6c4;
    z-index: 100;
    color:white;
    font-style:bold; 
    
    @media (max-width: 650px) {
      // left: 10%;
      left:10%;
      font-size: 15px;
     
    }
    @media (max-width: 500px) {
      left: 50%;
      top:35%;
      transform: translateX(-50%);
      
       
     
    }
  }
`;

export const SliderOneBtnStyle = styled.div`
  position: relative;
  top: 30%;
  left: 20%;
  background-color: white;
  color: black;
  &:hover {
    background-color: #6dd6c4;
    box-shadow: 0 0 3px #6dd6c4;
  }
`;
