import styled from 'styled-components';
export const NavbarContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  background: black;
  color: white;
  padding: 1rem 4rem;
  align-items: center;
  .logo {
    text-decoration: none;
    color: white;
  }
  .nav__link {
    display: flex;
    align-items: center;

    .nav__item {
      text-decoration: none;
      list-style-type: none;
      margin-left: 2rem;
      color: white;
      text-transform: lowercase;
      // &:last-child {
      //   background-color: purple;
      //   padding: 0.5rem 1rem;
      //   border-radius: 4px;
      // }
    }
  }
`;
