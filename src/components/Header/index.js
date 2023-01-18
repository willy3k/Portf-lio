import React, { useRef } from 'react';
import {
  FaHome,
  FaCommentAlt,
  FaUserAlt,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

import { Navegaçao } from './styled';

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('response_nav');
  };
  return (
    <Navegaçao>
      <header>
        <h1 className="logo-2" href="/">
          Portfólio
        </h1>
        <nav ref={navRef}>
          <a href="/">
            <FaHome size={28} />
          </a>
          <a href="/About">
            <FaUserAlt size={28} />
          </a>
          <a href="/Login">
            <FaCommentAlt size={28} />
          </a>
          <button
            className="nav-btn nav-close-btn"
            type="submit"
            onClick={showNavBar}
          >
            <FaTimes size={30} />
          </button>
        </nav>
        <button className="nav-btn " type="submit" onClick={showNavBar}>
          <FaBars size={30} />
        </button>
      </header>
    </Navegaçao>
  );
}
