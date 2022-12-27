import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 90px;
  background: #222020;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    padding: 20px 20px;
    margin: 0 10px 0;
    font-weight: bold;
    transition: 1.2s;
    &:hover {
      color: #565252;
      /* background:#565252 ; */
    }

`;
export const Logo = styled.div`
  .logo-2 {
    color: white;
    font-size: 30px;
    margin-right: 45vmax;
    font-family: cursive;
    transition: 1.2s;
    &:hover {
      cursor: pointer;
      font-weight: 900;
      color: #565252;
    }
  }
`;
