import styled from 'styled-components';
export const NavbarContainer = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: white;
  padding: 1rem 4rem;
  align-items: center;

  .logo {
    text-decoration: none;
    color: #047857;

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

    text-transform: lowercase;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem 2rem 0.5rem 2rem;
  }
  @media (max-width: 580px) {
    margin-bottom: 0rem;
  }
`;
