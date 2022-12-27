import styled from 'styled-components';
import * as colors from '../../config/colors';
import fotos from '../../assets/imgs/card.webp';

export const BoasVinda = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  color: white;

  .colum {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;
  }

  p {
    margin: 0.8rem;
    font-size: 18px;
    font-weight: 900;
  }

  h1 {
    font-size: 40px;
    margin: 1rem;
  }
`;

// introduçao
export const Intro = styled.div`
  color: white;
  background: linear-gradient(50deg, #141413 20%, #2e2740 60%);

  margin: 20px;
  height: 150px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    font-weight: 900;
    padding: 5px;
  }
`;

// conteudo
export const Conteudo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;

  .card {
    margin: 23px;
    width: 590px;
    height: 300px;
    background-color: ${colors.primaryColor};
    border-radius: 12px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .img {
    margin-right: 3rem;
    width: 130px;
    height: 130px;
    background-color: white;
    border-radius: 100%;
  }

  .card-2 {
    h2 {
      font-size: 40px;
    }

    p {
      margin: 10px;
      font-size: 20px;
      color: #45403c;
    }
    button {
      padding: 16px;
      border-radius: 8px;
      font-size: 16px;
      transition: 1s;
      &:hover {
        background-color: ${colors.PrimaryButton};
      }
      a {
        color: white;
      }
    }
  }

  .Explicaçao {
    display: flex;
    flex-direction: column;
    padding: 20px;
    h2 {
      font-size: 30px;
      margin: 10px 0;
    }
    p {
      font-size: 20px;
    }
    samp {
      display: flex;
      justify-content: center;
      font-weight: 900;
      margin-top: 10px;
      color: #96e6b3;
      transition: 1s;
      &:hover {
        transition: 1s;
        color: #ffd000;
      }
    }

    button {
      padding: 12px;
      font-size: 17px;
      margin: 15px 0 5px 0;
      transition: 1s;
      &:hover {
        background-color: ${colors.PrimaryButton};
      }
      a {
        color: white;
      }
    }
  }
  #foto {
    font-size: 20px;
    background-image: url(${fotos});
  }
`;
