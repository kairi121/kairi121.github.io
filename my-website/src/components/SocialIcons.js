import React from 'react';
import { IconButton, Box } from '@mui/material';
import { FaEnvelope, FaGithub, FaTimes, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <Box display="flex" justifyContent="center">
      <IconButton href="mailto:kairi@ucl.nuee.nagoya-u.ac.jp" sx={{ margin: '0 10px' }}>
        <FaEnvelope size={24} />
      </IconButton>
      <IconButton href="https://github.com/kairi121" target="_blank" sx={{ margin: '0 10px' }}>
        <FaGithub size={24} />
      </IconButton>
      {/* <IconButton href="https://twitter.com/kairi_uc" target="_blank" sx={{ margin: '0 10px' }}>
        <FaTimes size={24} />
      </IconButton> */}
      <IconButton href="https://www.instagram.com/kairi_uc" target="_blank" sx={{ margin: '0 10px' }}>
        <FaInstagram size={24} />
      </IconButton>
    </Box>
  );
};

export default SocialIcons;
