import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundImage: 'url(/images/photo.jpg)', // 背景画像を追加
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        padding: '20px',
      }}
    >
      <Container>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The page you are looking for doesn't exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ marginTop: 2 }}
        >
          Go to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
