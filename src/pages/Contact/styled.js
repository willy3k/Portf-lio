import styled from 'styled-components';

export const Contato = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  .card-Contact {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    width: 250px;
    height: 300px;
    border-radius: 20px;
    background: #2c2c2c;
    margin: 30px;
    box-shadow: 1px 6px 10px 2px #70797a;

    .icons {
      margin: 0 0 10px 0;
    }
    h1 {
      margin-bottom: 20px;
      text-shadow: black 0.2em 0.2em 0.3em;
    }
  }

  section {
    display: flex;
  }
  // formulario de contato
  form {
    width: 550px;
    margin: 50px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 6px 10px 2px #70797a;
  }
  label {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 50%;
    h4 {
      margin-left: 8px;
    }
  }
  .inputs {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  input {
    color: white;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid white;
    padding: 10px;
    background: transparent;
  }
  textarea {
    color: white;
    font-size: 18px;
    width: 93%;
    display: block;
    border: none;
    border-bottom: 1px solid white;
    padding: 10px;
    background: transparent;
    margin: 20px;
  }
  button {
    margin: 20px;
    font-size: 17px;
    border-radius: 20px;
    padding: 15px;
    transition: 1s;
    &:hover {
      color: black;
      background: #708290;
    }
  }

  // div de conteudo de entra contato
  .conteudo-contact {
    display: flex;
    flex-direction: column;
    margin: 50px;

    h2 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 40px;
    }
    .PRG {
      font-weight: 900;
      font-size: 16px;
    }
    p {
      margin-bottom: 20px;
      font-size: 20px;
    }

    .redes {
      margin-top: 20px;
    }
    a {
      color: white;
      margin: 10px;
      cursor: pointer;
    }
  }
`;
