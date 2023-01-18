/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  AiOutlineEnvironment,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

import { Container } from '../../style/GlobalStyles';
import { Contato } from './styled';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos');
    }

    const tamplateParams = {
      from_name: name,
      message,
      email,
    };

    emailjs
      .send(
        'service_r6lxk85',
        'template_i8o8b4n',
        tamplateParams,
        'tr8D4E5hVcpIiaxOc'
      )
      .then(
        (response) => {
          console.log('EMAIL ENVIADO', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('ERROR: ', error);
        }
      );
  }

  return (
    <Container>
      <Contato>
        <div className="card-Contact">
          <div className="card location">
            <AiOutlineEnvironment size={50} className="icons" />
            <h1>Localisaçao</h1>
            <p>
              Panelas-PE, bairro São lazaro
              <br />
              rua Nova, número 8;{' '}
            </p>
          </div>
          <div className="card numero">
            <AiOutlinePhone size={50} className="icons" />
            <h1>Número</h1>
            <p>(81) 98123-7767 (ligação)</p>
          </div>
          <div className="card inst">
            <AiOutlineWhatsApp size={50} className="icons" />
            <h1>whatsApp</h1>
            <p>(81) 98123-7767 (whatsApp)</p>
          </div>
          <div className="card email">
            <AiOutlineMail size={50} className="icons" />
            <h1>E-mail</h1>
            <p>willy3k1446d@gmail.com</p>
          </div>
        </div>

        <section>
          <form onSubmit={sendEmail}>
            <div className="inputs">
              <label>
                <h4>Name</h4>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />{' '}
              </label>

              <label>
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
            </div>
            <label>Mensagem</label>
            <textarea
              name="message"
              cols="20"
              rows="5"
              placeholder="Digite uma Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button type="submit">Enviar</button>
            {/* <input
              type="hidden"
              name="accessKey"
              value="65015222-db75-4ffc-86bb-b821b4b2d85c"
            /> */}
          </form>

          <div className="conteudo-contact">
            <h2>Entrar em contato</h2>
            <br />
            <p className="PRG">
              Aqui você podera me encontra, por diversos lugares, estou sempre
              atento a minhas redes.
            </p>
            <p>
              Se por acaso ficou alguma duvida, ou tenha algum enteresse de me
              contact, aqui estão minhas redes, para você me encontrar. <br />
              Espero por você la.
            </p>
            <div className="redes">
              <a
                href="https://wa.me/message/FPVS5E2JRTDVH1"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <AiOutlineWhatsApp className="iconsRedes" size={35} />
              </a>
              <a
                href="https://www.instagram.com/willy_silvaxp/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="iconsRedes" size={35} />
              </a>
              <a
                href="https://www.linkedin.com/in/willyxp"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin className="iconsRedes" size={35} />
              </a>
              <a
                href="https://t.me/Willysilvaxp"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="iconsRedes" size={35} />
              </a>
            </div>
          </div>
        </section>
      </Contato>
    </Container>
  );
}
