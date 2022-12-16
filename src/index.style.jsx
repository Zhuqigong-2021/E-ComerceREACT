import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;700;900&display=swap');
:root {
  font-family: DM;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* .custom__btn {
  padding: 0.5rem 1rem;
  background-color: green;
  border: none;
  outline: none;
  color: white;
  border-radius: 5px;
} */
.google {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border: none;
  outline: none;
  box-shadow: 0px 2px 2px rgb(0, 0, 0, 0.3);
}

`;
export default GlobalStyle;
