import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: hsl(120, 5%, 30%);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  object-fit: cover;
  background-blend-mode: overlay;
  &:hover {
    background-color: hsl(120, 5%, 60%);
  }
  border-radius: 3px;
`;
export const Content = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  opacity: 1;
  position: absolute;
  left: 0;

  h4 {
    font-weight: bold;

    font-size: 12px;

    color: white;
    text-transform: uppercase;
    &:hover {
      color: rgba(255, 255, 254, 1);
    }
    margin: 0;
    padding: 0;
  }

  p {
    // margin-top: 1.5rem;
    font-weight: lighter;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
    // border: 1px solid white;
    // padding: 0.2em 0.5em;
    // border-radius: 2px;
    &:hover {
      // background-color: black;
      border: none;
      color: red;
    }
  }
`;

export const Body = styled.div`
  height: 90px;

  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  // border: 1px solid white;

  opacity: 1;
  position: absolute;
  color: white;

  // h2 {
  //   font-weight: bold;
  //   margin: 0 6px 0;
  //   font-size: 22px;

  //   color: white;
  //   text-transform: uppercase;
  //   &:hover {
  //     color: black;
  //   }
  // }
  h4 {
    font-weight: bold;

    font-size: 12px;

    color: white;
    text-transform: uppercase;
    &:hover {
      color: rgba(255, 255, 254, 1);
    }
  }

  p {
    // margin-top: 1.5rem;
    font-weight: lighter;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
    // border: 1px solid white;
    // padding: 0.2em 0.5em;
    // border-radius: 2px;
    &:hover {
      // background-color: black;
      border: none;
      color: red;
    }
  }
`;

export const DirectoryItemContainer = styled.div`
  text-align: left;
  min-width: 30%;
  height: 56px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: left;

  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    // ${Body} {
    //   opacity: 0.9;

    // }
  }

  // @media screen and (max-width: 800px) {
  //   height: 200px;
  // }
`;
