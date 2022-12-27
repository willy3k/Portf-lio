import React from 'react';

import { Container } from '../../style/GlobalStyles';
import { BoasVinda, Intro, Conteudo } from './styled';

export default function Home() {
  return (
    <Container>
      <BoasVinda>
        <h1>Olá, Sejá bem vindo</h1>
        <div className="colum">
          <p>Sejá bem vindo ao meu Portfólio!</p>
          <p>Aqui Voçê conhecera um pouco sobre o meu trabalho.</p>
        </div>
      </BoasVinda>
      <Intro>
        <p>
          Aqui você vai pode me conhecer melhor,nesse projeto vai falar e vai
          mostra algumas de minhas habilidade e esperiencia.
        </p>
      </Intro>

      <Conteudo>
        <div className="card">
          <div className="img">0</div>
          <div className="card-2">
            <h2>Meu perfil</h2>
            <p>Veja com seus Proprios olhos</p>
            <button type="submit">
              <a href="/About">VISUALIZAR PERFIL</a>
            </button>
          </div>
        </div>

        <div className="card" id="foto">
          <div className="Explicaçao">
            <h2>Explicação</h2>
            <p>Nesse modulo você podera ler e intender um pouco</p>
            <p>do meu trabalhor, e de como eu fiz esse</p>
            <p>projeto, e o que eu usei nele.</p>
            <samp>Aproveite a leitura</samp>
            <button type="submit">
              <a href="/">ler</a>
            </button>
          </div>
        </div>
      </Conteudo>
    </Container>
  );
}
