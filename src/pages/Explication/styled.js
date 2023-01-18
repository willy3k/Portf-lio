import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Explicaçao = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  h1 {
    font-size: 38px;
    margin: 10px;
  }
  .conteudo {
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 1px 6px 10px 2px #70797a;

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid white;
      margin: 18px 5px;
      font-size: 30px;
      background-color: ${colors.primaryColor};
      text-shadow: black 0.2em 0.2em 0.3em;
      border-radius: 20px;
      padding: 5px;
    }
    p {
      font-size: 17px;
      margin: 18px 10px;
    }
  }
  .div-conteudo {
    display: flex;
    flex-direction: column;
    margin: 30px 20px;
  }
  .github {
    display: flex;
    justify-content: space-around;
    margin-inline-end: 5px;
    align-items: center;
    font-size: 27px;
    background: #52595f;
    border-radius: 15px;
    width: 10rem;
    margin: 10px 18px;

    transition: 0.5s;
    margin-bottom: 10px;
    &:hover {
      background: #708290;
    }
  }
`;
