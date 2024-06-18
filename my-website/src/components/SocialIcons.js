import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaTimes, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <Nav>
      <Nav.Link href="mailto:example@example.com"><FaEnvelope size={24} style={{ margin: '0 10px' }} /></Nav.Link>
      <Nav.Link href="https://github.com/your-profile" target="_blank"><FaGithub size={24} style={{ margin: '0 10px' }} /></Nav.Link>
      <Nav.Link href="https://your-link.com" target="_blank"><FaTimes size={24} style={{ margin: '0 10px' }} /></Nav.Link>
      <Nav.Link href="https://instagram.com/your-profile" target="_blank"><FaInstagram size={24} style={{ margin: '0 10px' }} /></Nav.Link>
    </Nav>
  );
};

export default SocialIcons;
