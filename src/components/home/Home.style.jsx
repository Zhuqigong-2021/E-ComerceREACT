import styled from 'styled-components';

const HomeContainer = styled.div`
  .remote {
    position: absolute;

    top: -50px;
    right: 20%;
    transform: scale(0.5);
    z-index: -10;
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

    transform: scale(1);
    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    &:hover {
      border: none;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    &:active {
      border: 1px solid white;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    @media (max-width: 500px) {
      font-size: 30px;
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

    transform: scale(1);
    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    &:hover {
      border: none;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    &:active {
      border: 1px solid white;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  .frontcard {
    position: absolute;
    height: 100%;
    top: 50%;
    z-index: 100;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    display: flex;
    align-items: end;
    justify-content: space-around;
    // flex-direction: column;
    // transform: translateX(-50%);
    width: 100%;

    display: flex;

    flex: 1;
    padding: 0.5rem;
    flex-wrap: wrap;
    @media (max-width: 450px) {
      width: 100%;
      flex-direction: column;
    }
  }
  .collection {
    position: absolute;

    right: 0;
    bottom: 0;

    width: 30%;
    // border: 1px solid red;

    height: 50%;

    min-height: 380px;
    padding: 0.5rem;
    padding-top: 0;
    // padding-bottom: 0rem;
    display: flex;

    flex: 1;
    overflow: scroll;
    display: flex;

    flex-direction: column;
    flex: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 450px) {
      display: none;
    }
    @media (max-width: 700px) {
      padding-right: 0;
    }
    @media (max-width: 1200px) {
      height: 49%;
      padding-top: 0;
      padding-bottom: 0rem;
    }
  }
  .signupbtn {
    position: relative;

    background-color: white;
    margin-bottom: 1rem;
    // height: 33%;
    min-height: 80px;
    diplay: flex;
    flex-direction: column;
    padding: 0.5rem;
    font-family: sans-serif;
    @media (max-width: 550px) {
      font-size: 12px;
    }
  }
  .col {
    display: flex;
    flex: 1;
  }
  .btn_front {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: black;
    text-decoration: none !important;
    font-style: none;

    display: flex;
    justify-content: center;

    width: 94%;
    margin: auto;

    border-radius: 5px;
    background-color: orange;

    &:hover {
      opacity: 0.95;
    }
    @media (max-width: 640px) {
      padding: 0.2rem 1rem;
    }
  }

  .slider {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;

    backgournd-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.2)
    );
    z-index: -100;
  }

  position: absolute;
  left: 50%;
  top: 0;
  right: 0;

  bottom: 0;
  transform: translateX(-50%);
  display: flex;

  background: ${({ imageUrl }) => `url(${imageUrl})`},
    ${({ str }) => `linear-gradient(${str})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-blend-mode: overlay;

  flex: 1;
  justify-content: center;
  padding: 0 1.8rem;

  width: 92%;
  height: 100%;
  margin: 0rem, 2rem;
  align-items: strech;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
    background-color: black;
  }
`;
export default HomeContainer;

export const FrontContent = styled.div`
  position: relative;
  top: 0;
  bottom: 0;

  z-index: 2;
  display: flex;
  flex-direction: column;

  justify-content: center;
  overflow: hidden;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const SlideContainer = styled.div`
  display: flex;

  column-gap: 1rem;
  height: 100%;

  bottom: 1rem;
  transform: ${({ slideIndex }) => `translateX((${slideIndex}-1)*100%) `};

  background: ${({ imageUrl }) => `url(${imageUrl})`},
    ${({ str }) => `linear-gradient(${str})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-blend-mode: overlay;

  flex: 1;
  justify-content: center;
  padding: 0 1.8rem;
  width: 100%;
  margin: 0rem, 2rem;
  align-items: strech;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
