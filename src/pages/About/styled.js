import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  padding: 30px;
  margin-bottom: 20px;
  margin: 0px auto;
  color: white;

  .card-1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40px;
    background-color: ${colors.primaryColor};
    width: 22rem;
    height: 26rem;
    border-radius: 5px;
    box-shadow: 1px 6px 10px 2px #70797a;

    h2 {
      border-top: 2px solid black;
      padding-top: 30px;
      font-size: 35px;
      text-shadow: black 0.2em 0.2em 0.3em;
    }
    .card-img {
      justify-content: flex-start;
      width: 180px;
      height: 180px;
      background-color: white;
      border-radius: 50%;
      margin-bottom: 4rem;
    }
    .card-perfil {
      width: 100%;
      border: 3px solid white;
      border-radius: 50%;
    }
  }

  .card-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 30px;
    margin-inline-start: auto;
    width: 48rem;
    border-radius: 5px;
    background-color: ${colors.primaryColor};
    box-shadow: 1px 6px 10px 2px #70797a;

    h1 {
      font-size: 30px;
      margin-bottom: 25px;
      text-shadow: black 0.2em 0.2em 0.3em;
    }
    .About-me {
      height: 14.5rem;
      overflow-y: scroll;
      overflow: auto;
      margin-bottom: 15px;

      p {
        font-size: 18px;
        margin-bottom: 24px;
      }
    }

    .myRed {
      display: flex;
      align-items: center;
      button {
        display: flex;
        justify-content: space-around;
        margin-inline-end: 5px;
        align-items: center;
        font-size: 17px;
        background: #52595f;
        width: 10rem;

        transition: 0.5s;
        margin-bottom: 10px;
        &:hover {
          background: #708290;
        }
      }
    }
  }

  .card-3 {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    width: 80rem;
    height: 18rem;
    background-color: ${colors.primaryColor};
    box-shadow: 1px 6px 10px 2px #70797a;

    .title {
      font-size: 26px;
      display: flex;
      justify-content: center;
      margin: 50px auto;
      text-shadow: black 0.2em 0.2em 0.3em;
    }
    .cads-icons {
      display: flex;
      justify-content: space-around;
      flex-grow: inherit;
    }
    .card-skill {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      box-shadow: 2px 2px 9px 1px #70797a;
      border-radius: 50%;
      transition: 1s;
    }
    .icons-hover:hover {
      font-size: 80px;
    }
    .html:hover {
      color: black;
      background: black;
      width: 110px;
      height: 110px;
      box-shadow: 2px 8px 9px 3px #70797a;
    }
    .css:hover {
      color: black;
      background: black;
      width: 110px;
      height: 110px;
      box-shadow: 2px 8px 9px 3px #70797a;
    }
    .javaScript:hover {
      color: black;
      background: yellow;
      width: 110px;
      height: 110px;
      box-shadow: 2px 8px 9px 3px #70797a;
    }
    .react:hover {
      color: black;
      background: black;
      width: 110px;
      height: 110px;
      box-shadow: 2px 8px 9px 3px #70797a;
    }

    .card-skill .nomes {
      text-align: center;
      background: white;
      border-radius: 5px;
      padding: 5px;
      font-weight: 900;
      color: black;
      display: none;
      transition: 1s;
    }
    .card-skill:hover .nomes {
      display: block;
      position: absolute;
      margin: 0 auto auto auto;
      font-size: 20px;
      top: -30px;
    }
  }

  .card-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 30px;
    margin-bottom: 30px;
    margin-right: 29px;
    width: 32rem;
    border-radius: 5px;
    background-color: ${colors.primaryColor};
    box-shadow: 1px 6px 10px 2px #70797a;

    .paragrafo {
      color: #52595f;
      margin: 20px;
    }
    h2 {
      font-size: 35px;
      text-shadow: black 0.2em 0.2em 0.3em;
    }

    //whatzz
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      width: 100%;
      display: flex;
      text-align: center;
      justify-content: center;
      font-size: 20px;
      color: white;
      transition: 1s;

      &:hover {
        color: black;
        background: #708290;
      }
    }
  }

  .card-5 {
    width: 44rem;
    margin-inline-start: auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: ${colors.primaryColor};
    box-shadow: 1px 6px 10px 2px #70797a;

    .card-tec {
      display: block;
      width: 100%;
    }
    .titulo {
      display: block;
      text-align: center;
      margin-top: 30px;
      margin-bottom: 30px;
      width: 100%;
      h1 {
        text-shadow: black 0.2em 0.2em 0.3em;
      }
    }
    h1 {
      font-size: 35px;
    }
    .tecnologias {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    // linguagem com esperiecia
    .esperiencia {
      display: flex;
      flex-direction: column;

      .T-esperinhecia {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px;
      }

      .card-tec-F {
        display: flex;
        flex-wrap: wrap;
      }

      .card-tec-esp {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3px;
        background: black;
        border-radius: 5px;
      }
      .fundo {
        background: yellow;
      }

      .card-tec-esp .nomes {
        text-align: center;
        background: white;
        border-radius: 5px;
        padding: 5px;
        font-weight: 900;
        color: black;
        display: none;
        transition: 1s;
      }
      .card-tec-esp:hover .nomes {
        display: block;
        position: absolute;
        margin: 0 auto auto auto;
        top: -30px;
      }
    }

    // loguagem estudando
    .estudando {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-left: 2px solid black;

      .T-estudando {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
      }
      .card-tec-E {
        display: flex;
      }
      .card-tec-est {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3px;
        border-radius: 5px;
      }
      .node {
        background: white;
      }
      .typ {
        background: white;
      }

      .card-tec-est .nomes {
        text-align: center;
        background: white;
        border-radius: 5px;
        padding: 5px;
        font-weight: 900;
        color: black;
        display: none;
        transition: 1s;
      }
      .card-tec-est:hover .nomes {
        display: block;
        position: absolute;
        margin: 0 auto auto auto;
        top: -30px;
      }
    }
    // linguagem que desejo
    .interesse {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-left: 2px solid black;

      .T-interesse {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
      }
      .card-tec-I {
        display: flex;
      }

      .card-tec-in {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3px;
        border-radius: 5px;
      }
      .native {
        background: white;
      }

      .card-tec-in .nomes {
        text-align: center;
        background: white;
        border-radius: 5px;
        padding: 5px;
        font-weight: 900;
        color: black;
        display: none;
        transition: 1s;
      }
      .card-tec-in:hover .nomes {
        display: block;
        position: absolute;
        margin: 0 auto auto auto;
        top: -30px;
      }
    }
  }

  /* mobile phone */
  @media (max-width: 940px) {
    .card-1 {
      width: 100%;
      h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        border-top: 2px solid black;
        padding-top: 30px;
        font-size: 35px;
        text-shadow: black 0.2em 0.2em 0.3em;
      }
    }

    .card-2 {
      width: 100%;
      margin-top: 25px;
    }
    .About-me {
      height: 40rem;
      overflow-y: scroll;

      overflow: auto;
      margin-bottom: 20px;
    }

    .card-3 {
      height: 22rem;
    }
    .card-skill {
    }
    .cads-icons {
      display: flex;
      flex-wrap: wrap;
    }

    .card-4 {
      width: 100%;
      margin: 0 0 28px 0;
    }

    .card-5 {
      width: 100%;
      .card-tec {
        display: flex;
        flex-direction: column;
      }
      .tecnologias {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
`;
