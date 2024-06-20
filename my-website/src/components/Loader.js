import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f0f0f0 0%, #d6e4f0 100%)', // 淡い背景のグラデーション
  color: '#333',
});

const StyledCircularProgress = styled(CircularProgress)({
  color: '#3f51b5',
  animation: 'rotate 2s linear infinite',
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const Loader = () => {
  return (
    <BackgroundBox>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <StyledCircularProgress size={60} thickness={4} />
        <Typography
          variant="h6"
          component="div"
          sx={{ marginTop: 2, fontWeight: 'bold', color: '#3f51b5' }}
        >
          Loading...
        </Typography>
      </Box>
    </BackgroundBox>
  );
};

export default Loader;
