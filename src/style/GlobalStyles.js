import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background:${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button{
  cursor: pointer;
  background: blue;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  margin-top: 90px;
  width: 100%;
  /* max-width: 1440px; */
  background: black;
  padding: 20px;
`;
