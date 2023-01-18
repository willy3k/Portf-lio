/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import { Container } from '../../style/GlobalStyles';
import { Explicaçao } from './styled';

export default function Explication() {
  return (
    <Container>
      <Explicaçao>
        <h1>Explicação</h1>
        <section className="conteudo">
          <div className="div-conteudo sobre">
            <h2>Sobre</h2>
            <p>
              Oi, Eu me Chamo willy, tenho 20 anos e sou natural de panelas-PE,
              sou desenvolvedor, a 3 anos, sempre fui apaixonado por tecnologia,
              quando garoto, jogava muito videogame e mexia muito em sites e já
              me via no futuro criando coisas, e com isso embarquei na área de
              tecnologia, atualmente sou desenvolvedor Front-end, quando estou
              programando me sinto muito bem, e mais ainda quando termino que
              vejo aquilo que criei funcionando, é uma sensação satisfatória,
              que me motiva cada vez mais a avança nessa categoria de
              tecnologia, pois cada vez que nos aprofundamos, mais coisas novas
              aparecem, é um conhecimento sem fim, eu gosto muito de desafios,
              pois diariamente gosto de propor um desafio a min mesmo, para cada
              vez mais desenvolver minhas habilidade e assim conseguir chegar
              nos meus objetivos
            </p>
          </div>
          <div className="div-conteudo objetivo">
            <h2>Objetivo</h2>
            <p>
              Meu principal objetivo é agregar com todo meu conhecimento e
              experiência que possuo na área de Desenvolvimento, e assim cada
              vez mais aumenta minhas habilidades e a geração de resultados
              positivos, de modo que seja possível viabilizar um crescimento
              qualitativo e quantitativo da empresa. Sou responsável, criativa,
              dinâmica e estratégica e estou à disposição para entrevistas e
              comprovações.
            </p>
          </div>
          <div className="div-conteudo Explication">
            <h2>Explicação do Projeto</h2>
            <p>
              Esse projeto é um de meu projeto portfólio, nesse projeto você
              pode ver algumas de minhas habilidades, nesse projeto usei layout,
              ferramentas que utilizei foram (HTML, CSS, JavaScript, React.js,
              GIT, GITHUB), utilizei várias coisas do react, uma delas foi:
              react-router-dom, que me possibilito o encaminhamento das rotas
              das páginas. Usei também a configuração de cores, e entres outras
              coisas que me ajudaram no desenvolvimento desse projeto.
              <samp>
                Vou deixar o link do código do projeto caso você queira dar, uma
                olhada.
              </samp>
            </p>
            <a
              href="https://github.com/willy3k/Portf-lio"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit" className="github">
                <AiFillGithub />
              </button>
            </a>
          </div>
        </section>
        <h1>Explanation</h1>
        <section className="conteudo">
          <div className="div-conteudo sobre">
            <h2>About</h2>
            <p>
              Hi, my name is Willy, Im 20 years old and Im from Panas-PE, Im a
              developer, for 3 years, I ve always been passionate about
              technology, when I was a kid, I played a lot of video games and
              messed with websites a lot and already I saw myself in the future
              creating things, and with that I embarked on the area of
              technology, Im currently a Front-end developer, when I m
              programming I feel very good, and even more when I finish that I
              see what I created working, its a satisfying feeling, that
              motivates me more and more to advance in this category of
              technology, because every time we go deeper, more new things
              appear, its an endless knowledge, I really like challenges,
              because every day I like to propose a challenge to myself, for
              each more and more to develop my skills and thus be able to reach
              in my goals
            </p>
          </div>
          <div className="div-conteudo objetivo">
            <h2>Goal</h2>
            <p>
              My main objective is to add with all my knowledge and experience I
              have in the Development area, and thus each increasingly increases
              my skills and the generation of results positive, so that it is
              possible to enable a growth qualitative and quantitative aspects
              of the company. I am responsible, creative, dynamic and strategic
              and I am available for interviews and confirmations.
            </p>
          </div>
          <div className="div-conteudo Explication">
            <h2>Project Explanation</h2>
            <p>
              This project is one of my portfolio projects, in this project you
              you can see some of my skills, in this project I used layout,
              tools I used were (HTML, CSS, JavaScript, React.js, GIT, GITHUB),
              I used several things from react, one of them was:
              react-router-dom, which allows me to forward the routes of the
              pages. I also used the color configuration, and among others
              things that helped me in the development of this project.
              <samp>
                Ill leave the project code link in case you want to give it a
                look.
              </samp>
            </p>
            <a
              href="https://github.com/willy3k/Portf-lio"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit" className="github">
                <AiFillGithub />
              </button>
            </a>
          </div>
        </section>
      </Explicaçao>
    </Container>
  );
}
