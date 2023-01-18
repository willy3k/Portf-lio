import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1, DiNodejsSmall } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';

import perfil from '../../assets/imgs/perfil.jpeg';
import { Container } from '../../style/GlobalStyles';
import { Cards } from './styled';

export default function About() {
  return (
    <Container>
      <Cards>
        <div className="card-1">
          <div className="card-img">
            <img className="card-perfil" src={perfil} alt="" />
          </div>

          <h2>Willy de lima</h2>
        </div>
        <div className="card-2">
          <h1>About-me</h1>
          <div className="About-me">
            <p>
              <h3>Sobre</h3>
              <br />
              Oi, meu nome é willy, tenho 20 anos, sou natural de panelas-PE.
              Estou nessa área de desenvolvedor a mais de 3 anos. Minha
              especialização é em Desnvolvedor Front- End.
              <br />
              <br />
              <h3>Objetivos</h3>
              <br />
              Meu principal objetivo é agregar com todo meu conhecimento e
              experiência que possuo na área de Desenvolvimento, e assim cada
              vez mais aumenta minhas habilidades e as geração de resultados
              positivos, de modo que seja possível viabilizar um crescimento
              qualitativo e quantitativo da empresa . Sou responsável, criativa,
              dinâmica e estratégico e estou à disposição para entrevistas e
              comprovações.
            </p>
          </div>
          <div className="myRed">
            <a
              href="https://github.com/willy3k"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">
                <AiFillGithub size={24} />
                Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/willyxp"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">
                <AiFillLinkedin size={24} />
                LinkedIn
              </button>
            </a>
          </div>
        </div>
        <div className="card-3">
          <div className="title">
            <h1>Hards Skills</h1>
          </div>
          <div className="cads-icons">
            <div className="card-skill html">
              <div className="nomes">
                <p>Html</p>
              </div>
              <AiFillHtml5 className="icons-hover" size={70} color="#FF6600" />
            </div>
            <div className="card-skill css">
              <div className="nomes">
                <p>Css</p>
              </div>
              <FaCss3Alt className="icons-hover" size={70} color="#4385B8" />
            </div>
            <div className="card-skill javaScript">
              <div className="nomes">
                <p>JavaScript</p>
              </div>
              <DiJavascript1
                className="icons-hover"
                size={70}
                color="#070707"
              />
            </div>
            <div className="card-skill react">
              <div className="nomes">
                <p>React.js</p>
              </div>
              <GrReactjs className="icons-hover" size={70} color="#00B2FF" />
            </div>
          </div>
        </div>
        <div className="card-4">
          <h2>Encontre-me</h2>
          <div className="paragrafo">
            <p>aqui estarão minhas redes</p>
            <p>você podera me encontrar por elas.</p>
          </div>
          <a href="https://wa.me/message/FPVS5E2JRTDVH1">
            <button type="submit">Contate-nos</button>
          </a>
        </div>
        <div className="card-5">
          <div className="card-tec">
            <div className="titulo">
              <h1>Tecnologia</h1>
            </div>
            <div className="tecnologias">
              <div className="esperiencia">
                <div className="T-esperinhecia">
                  <h2>Esperiencia</h2>
                </div>
                <div className="card-tec-F">
                  <div className="card-tec-esp">
                    <div className="nomes">
                      <p>Html</p>
                    </div>
                    <AiFillHtml5 color="#FF6600" size={50} />
                  </div>
                  <div className="card-tec-esp">
                    <div className="nomes">
                      <p>Css</p>
                    </div>
                    <FaCss3Alt color="#4385B8" size={50} />
                  </div>
                  <div className="card-tec-esp fundo">
                    <div className="nomes">
                      <p>JavaScript</p>
                    </div>
                    <DiJavascript1 color="#070707" size={50} />
                  </div>
                  <div className="card-tec-esp">
                    <div className="nomes">
                      <p>React.js</p>
                    </div>
                    <GrReactjs color="#00B2FF" size={50} />
                  </div>
                </div>
              </div>

              <div className="estudando">
                <div className="T-estudando">
                  <h2>Estudando</h2>
                </div>
                <div className="card-tec-E">
                  <div className="card-tec-est node">
                    <div className="nomes">
                      <p>Node.js</p>
                    </div>
                    <DiNodejsSmall color="#55B33B" size={50} />
                  </div>
                  <div className="card-tec-est typ">
                    <div className="nomes">
                      <p>TypeScrip</p>
                    </div>
                    <SiTypescript color="#367fb6" size={50} />
                  </div>
                </div>
              </div>

              <div className="interesse">
                <div className="T-interesse">
                  <h2>Interesse</h2>
                </div>
                <div className="card-tec-I">
                  <div className="card-tec-in native">
                    <div className="nomes">
                      <p>React Native</p>
                    </div>
                    <GrReactjs color="#00B2FF" size={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Cards>
    </Container>
  );
}
