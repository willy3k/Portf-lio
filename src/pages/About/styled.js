import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Cards = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 95%;
  padding: 30px;
  margin: 100px auto;
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

    h2 {
      font-size: 35px;
    }
    .card-img {
      justify-content: flex-start;
      width: 180px;
      height: 180px;
      background-color: white;
      border-radius: 50%;
      margin-bottom: 4rem;
    }
  }

  .card-2 {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 30px;
    margin-top: 7.9rem;
    margin-inline-start: auto;
    width: 44rem;
    height: 18.1rem;
    border-radius: 5px;
    background-color: ${colors.primaryColor};

    h1 {
      font-size: 30px;
      margin-bottom: 25px;
    }
    .About-me {
      margin-bottom: 20px;

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
    /* justify-content: center; */
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    width: 73rem;
    height: 19rem;
    background-color: ${colors.primaryColor};

    .title {
      font-size: 26px;
      display: flex;
      justify-content: center;
      margin: 50px auto;
    }
    .cads-icons {
      display: flex;
      justify-content: space-around;
      flex-grow: inherit;
    }
    .card-skill {
      font-size: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transition: 1s;
      &:hover {
        font-size: 80px;
        color: black;
        background: white;
        width: 110px;
        height: 110px;
      }
    }
  }

  .card-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 30px;
    margin-bottom: 30px;
    width: 28rem;
    height: 17rem;
    border-radius: 5px;
    background-color: ${colors.primaryColor};
    .paragrafo {
      color: #52595f;
      margin: 20px;
    }
    h2 {
      font-size: 35px;
    }

    button {
      font-size: 17px;
      transition: 1s;
      &:hover {
        color: black;
        background-color: #708290;
      }
    }
  }

  .card-5 {
    width: 44rem;
    height: 17rem;
    margin-inline-start: auto;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-color: ${colors.primaryColor};
  }

  /* mobile phone */
  @media (max-width: 840px) {
    .About-me {
      height: 40rem;
      overflow-y: scroll;

      overflow: auto;
      margin-bottom: 20px;
    }

    .card-3 {
      height: 23rem;
    }
    .card-skill {
    }
    .cads-icons {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
