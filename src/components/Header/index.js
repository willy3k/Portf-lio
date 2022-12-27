import React from 'react';
import { FaHome, FaCommentAlt, FaUserAlt } from 'react-icons/fa';

import { Nav, Logo } from './styled';

export default function Header() {
  return (
    <Nav>
      <Logo className="logo-1">
        <a className="logo-2" href="/">
          Portfólio
        </a>
      </Logo>
      <a href="/">
        <FaHome size={24} />
      </a>
      <a href="/About">
        <FaUserAlt size={24} />
      </a>
      <a href="/Login">
        <FaCommentAlt size={24} />
      </a>
    </Nav>
  );
}
