import styled from 'styled-components';

// export const CardStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   padding: 1rem;
//   min-width: 40%;
//   height: 280px;
// `;
export const FrontImage = styled.div`
  display: flex;
  position: relative;
  flex-diretion: column;
  flex: 1;
  width: 100%;
  // height: 100%;
  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  object-fit: cover;
  overflow: hidden;
  &:hover {
    background-color: hsl(120, 5%, 60%);
  }
`;

export const CardStyle = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  min-width: 15%;
  height: 400px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  text-align: left;

  justify-content: center;

  background-color: ${({ special }) => `${special}`};
  // background: ${({ imageUrl }) => `url(${imageUrl})`},
  //   ${({ str }) => `linear-gradient(${str})`};
  padding: 1rem;
  .signbtn {
    background-color: orange;
  }
  h3 {
    margin-bottom: 0.5rem;
    font-family: sans-serif;
    cursor: default;
  }
  .signbtn {
    margin-bottom: 1rem;
  }
  .seemore {
    display: block;
    // color: #4d7eb0;
    // color: #1d4ed8;
    color: #50afb3;
    margin-top: 0.5rem;
    text-decoration: none;
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
    &:hover,
    &:active {
      color: #eb7302;
      text-decoration: underline;
    }
  }
  .seelink {
    text-decoration: none;
  }

  // margin: 0 7.5px 15px;
  margin: 0rem 0.5rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  .title {
    display: flex;
    overflow-wrap: break-word;
  }
  .sign {
    margin-bottom: 2rem;
    @media (max-width: 800px) {
      margin-bottom: 1.5rem;
    }
  }

  &:hover {
    cursor: pointer;

    ${FrontImage} {
      transform: scale(0.95);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  &:last-of-type {
    min-width: 19%;
    flex-grow: 0;
  }
  @media screen and (max-width: 800px) {
    height: 300px;
    .sign {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    min-width: 28%;
    flex-grow: 1;
    &:last-of-type {
      min-width: 99%;
    }
  }
  @media screen and (max-width: 700px) {
    min-width: 100%;
    &:last-of-type {
      min-width: 100%;
    }
  }
`;

// ${Body} {
//   opacity: 0.9;
// }
