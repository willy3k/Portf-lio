import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaAngular } from 'react-icons/fa';
import { DiJavascript1, DiNodejsSmall } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';

import { Container } from '../../style/GlobalStyles';
import { Cards } from './styled';

export default function About() {
  return (
    <Container>
      <Cards>
        <div className="card-1">
          <div className="card-img">
            <div className="img">o</div>
          </div>
          <h2>Willy de lima</h2>
        </div>
        <div className="card-2">
          <h1>About-me</h1>
          <div className="About-me">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident, ipsum officiis ratione vitae pariatur asperiores
              dolorum tempora, praesentium placeat optio maxime quae, adipisci
              dolor harum quam unde. Asperiores, veniam et. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Suscipit, natus ducimus
              officia assumenda, quasi incidunt quae sequi inventore sapiente
              molestiae, nesciunt sed eaque. Iste placeat odit facere voluptate,
              nobis vel.
            </p>
          </div>
          <div className="myRed">
            <button type="submit">
              <AiFillGithub size={24} />
              Github
            </button>
            <button type="submit">
              <AiFillLinkedin size={24} />
              LinkedIn
            </button>
          </div>
        </div>
        <div className="card-3">
          <div className="title">
            <h1>Skills</h1>
          </div>
          <div className="cads-icons">
            <div className="card-skill">
              <AiFillHtml5 />
            </div>
            <div className="card-skill">
              <FaCss3Alt s />
            </div>
            <div className="card-skill">
              <DiJavascript1 />
            </div>
            <div className="card-skill">
              <GrReactjs />
            </div>
          </div>
        </div>
        <div className="card-4">
          <h2>Encontre-me</h2>
          <div className="paragrafo">
            <p>aqui estarão minhas redes</p>
            <p>você podera me encontrar por elas.</p>
          </div>
          <button type="submit">Contate-nos</button>
        </div>
        <div className="card-5">
          <h1>Tecnologia</h1>
          <div className="tecnologias">
            <div className="esperiencia">
              <AiFillHtml5 />
              <FaCss3Alt />
              <DiJavascript1 />
              <GrReactjs />
            </div>
            <div className="estudando">
              <DiNodejsSmall />
              <SiTypescript />
            </div>
            <div className="aprender">
              <FaAngular />
            </div>
          </div>
        </div>
      </Cards>
    </Container>
  );
}
