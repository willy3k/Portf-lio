import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const Navegaçao = styled.nav`
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 2rem 2rem;
    background: #29335c;
    color: #eee;
  }

  nav a {
    margin: 0 2rem;
    color: #eee;
    text-decoration: none;
    transform: 1s;
    &:hover {
      /* color: #db2b39; */
      color: #5767aa;
    }
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    visibility: hidden;
    opacity: ;
  }
  @media only screen and (max-width: 1024px) {
    header .nav-btn {
      visibility: visible;
      opacity: 1;
    }

    header nav {
      position: fixed;
      top: 0;
      right: 0;
      width: 30%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      background: #5767aa;
      border-radius: 0 0 20px 20px;
      transition: 1s;
      transform: translateY(-100vh);
    }

    header .response_nav {
      transform: none;
    }
    nav .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
    nav a {
      font-size: 2.5rem;
      &:hover {
        color: #29335c;
      }
    }
  }
`;
