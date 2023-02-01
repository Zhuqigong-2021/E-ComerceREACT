import styled from 'styled-components';
export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 92%;
  // background-color: rgba(247, 255, 238, 0.7);
  // background-color: #064e3b;
  // background-image: linear-gradient(
  //   to bottom,
  //   rgba(0, 0, 0, 1) 80%,
  //   rgba(0, 0, 0, 0.7),
  //   rgba(0, 0, 0, 0.5),
  //   transparent
  // );
  background-color: ${({ background }) => `${background}`};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: white;
  padding: 1rem 3rem;
  align-items: center;

  .logo {
    position: relative;
    text-decoration: none;
    // color: #047857;
    // color: #00120b;
    color: white;

    .lg {
      transform: scale(2);
      transform-origin: center;
    }
    .qg {
      position: absolute;
      top: 1.2rem;
      margin-left: 0.7rem;
      color: white;
      font-weight: 600;
      @media (max-width: 300px) {
        display: none;
      }
    }
  }
  .nav__link {
    display: flex;
    align-items: center;
    color: white;
  }
  .nav__item {
    text-decoration: none;
    list-style-type: none;
    margin-left: 2rem;
    // color: #047857;
    // color: #00120b;
    color: white;
    font-weight: 600;

    text-transform: lowercase;
    &:hover {
      cursor: pointer;
    }
  }
  .nav_item,
  .phone {
    display: none;
    @media (max-width: 450px) {
      display: block;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 1rem 2rem 1rem 2rem;
  }
  @media (max-width: 580px) {
    margin-bottom: 0rem;
  }
  @media (max-width: 350px) {
    padding: 1rem 1rem;
  }
`;
