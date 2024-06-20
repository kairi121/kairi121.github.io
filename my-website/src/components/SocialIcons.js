import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaTimes, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <Nav>
      <Nav.Link href="kairi@ucl.nuee.nagoya-u.ac.jp"><FaEnvelope size={24} style={{ margin: '0 10px' }} /></Nav.Link>
      <Nav.Link href="https://github.com/kairi121" target="_blank"><FaGithub size={24} style={{ margin: '0 10px' }} /></Nav.Link>
      <Nav.Link href="https://twitter.com/kairi_uc" target="_blank"><FaTimes size={24} style={{ margin: '0 10px' }} /></Nav.Link>
      <Nav.Link href="https://www.instagram.com/kairi_uc" target="_blank"><FaInstagram size={24} style={{ margin: '0 10px' }} /></Nav.Link>
    </Nav>
  );
};

export default SocialIcons;
