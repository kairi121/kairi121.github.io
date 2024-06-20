import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import SocialIcons from './SocialIcons'; // インポートを追加
import LanguageSwitcher from './LanguageSwitcher'; // インポートを追加
import { Link as RouterLink } from 'react-router-dom';

const Logo = styled('img')({
  width: '120px',  // 画像の幅を設定
  cursor: 'pointer',
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #e6e6fe 30%, #f5f5f5f5 90%)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <a href="https://ucl.nuee.nagoya-u.ac.jp/">
              <Logo src="/images/home.svg" alt="Brand Logo" />
            </a>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Typography
              variant="button"
              component={RouterLink}
              to="/"
              sx={{
                margin: 1,
                padding: '6px 12px',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Home
            </Typography>
            <Typography
              variant="button"
              component={RouterLink}
              to="/blog"
              sx={{
                margin: 1,
                padding: '6px 12px',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              BLOG
            </Typography>
            <Typography
              variant="button"
              component={RouterLink}
              to="/photo"
              sx={{
                margin: 1,
                padding: '6px 12px',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Photo
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <SocialIcons />
            <LanguageSwitcher />
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2, display: { xs: 'block', md: 'none' } }}
            onClick={handleMenu}
          >
          <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleClose} component={RouterLink} to="/">Home</MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/blog">Blog</MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/photo">Photo</MenuItem>
            <MenuItem onClick={handleClose}>
              <LanguageSwitcher />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SocialIcons />
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
