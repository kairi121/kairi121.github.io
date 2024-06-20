import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')(({ theme }) => ({
  background: 'linear-gradient(45deg, #333, #555)', // 暗めのグラデーション背景
  color: 'white', // 白い文字
  padding: '20px 0',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Typography variant="body1">
          © 2024 Kairi Takaki
        </Typography>
        <Typography variant="body2">
          Nagoya University, Japan
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
