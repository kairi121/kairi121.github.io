import React, { useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const photos = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
  { src: '/images/photo4.jpg', alt: 'Photo 4' },
  { src: '/images/photo5.jpg', alt: 'Photo 5' },
  { src: '/images/photo6.jpg', alt: 'Photo 6' },
  { src: '/images/photo7.jpg', alt: 'Photo 7' },
  { src: '/images/photo8.jpg', alt: 'Photo 8' },
  { src: '/images/photo9.jpg', alt: 'Photo 9' },
  // 追加の写真をここに追加します。
];

const PhotoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOSの初期化とアニメーションの持続時間の設定
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Header />
      <div
        style={{
          background: 'linear-gradient(to right, #d3d3d3, #f8f8ff)',
          padding: '20px 0',
          minHeight: '100vh', // ページ全体の高さをカバー
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h2"
            component="h4"
            align="center"
            gutterBottom
            sx={{ marginTop: 4, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Photo Gallery
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {photos.map((photo, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  data-aos="fade-up" // AOSのアニメーションを適用
                  sx={{
                    width: '100%',
                    height: '400px', // 高さを自動に設定
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    objectFit: 'cover', // 画像が枠内に収まるように調整
                  }}
                  src={photo.src}
                  alt={photo.alt}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default PhotoPage;
