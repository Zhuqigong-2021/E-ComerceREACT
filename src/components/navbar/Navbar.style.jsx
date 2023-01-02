import styled from 'styled-components';
export const NavbarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  // background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 4rem;
  align-items: center;
  .logo {
    text-decoration: none;
    color: #047857;
    // color: white;
    .lg {
      transform: scale(2);
      transform-origin: center;
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
    color: #047857;
    // color: white;
    text-transform: lowercase;
  }
`;
