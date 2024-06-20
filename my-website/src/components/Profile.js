import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme, Container } from '@mui/material';
import { styled } from '@mui/system';
import './Profile.css'; // 追加

const CircleContainer = styled(Box)(({ theme }) => ({
  width: '350px',
  height: '350px',
  borderRadius: '20%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '200px',
  },
}));

const ProfileContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  padding: '20px',
  overflow: 'hidden',
  zIndex: 0,
  width: '100%',
  margin: '0 auto', // 中央寄せ
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.6,
  zIndex: -1,
}));

const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const images = ['/images/test1.jpg', '/images/test2.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  const images = [
    '/images/profile1.jpg',
    '/images/profile2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 1000); // フェードアウトの時間
    }, 10000); // 画像変更のインターバル

    return () => clearInterval(interval); // コンポーネントのアンマウント時にインターバルをクリア
  }, [images.length]);

  return (
    <ProfileContainer>
      <BackgroundContainer sx={{ backgroundImage: `url(${backgroundImage})` }} />
      <Box display="flex" justifyContent="center">
        <CircleContainer>
          <img
            src={images[currentImageIndex]}
            alt=""
            className={isFading ? 'fade-out' : 'fade-in'}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              transition: 'opacity 1s ease-in-out', 
              opacity: isFading ? 0 : 1 
            }}
          />
        </CircleContainer>
      </Box>
      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant={isSmallScreen ? 'h5' : 'h4'}
          color="white"
          fontWeight="bold"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'inline-block',
          }}
          className="profile-name"
        >
          KAIRI TAKAKI
        </Typography>
        <Typography
          variant={isSmallScreen ? 'h6' : 'h5'}
          color="white"
          fontWeight="bold"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            padding: '4px 8px',
            border: '2px solid white',
            borderRadius: '4px',
            display: 'inline-block',
            marginTop: '8px',
          }}
          className="profile-subtitle"
        >
          @Nagoya University, Japan
        </Typography>
      </Box>
    </ProfileContainer>
  );
};

export default Profile;
