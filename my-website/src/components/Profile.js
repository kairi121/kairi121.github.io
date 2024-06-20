import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import '../HomePage.css';

const ProfileContainer = styled(Container)`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  overflow: hidden;
  z-index: 0;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    opacity: 0.6; /* 透明度の設定 */
    z-index: -1;
  }
`;

const Profile = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const images = ['/images/test1.jpg', '/images/test2.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  const images = [
    '/images/profile1.jpg',
    '/images/profile2.jpg',
    '/images/profile3.jpg'
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
    }, 10000); // 10秒ごとに画像を切り替え

    return () => clearInterval(interval); // コンポーネントがアンマウントされるときにインターバルをクリア
  }, [images.length]);

  return (
    <ProfileContainer className="profile-container no-padding" backgroundImage={backgroundImage} style={{ textAlign: 'center', marginTop: '1rem' }}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} md={6} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="circle-container" style={{ position: 'relative' }}>
            <img
              src={images[currentImageIndex]}
              alt=""
              className={`circle-image ${isFading ? 'fade-out' : 'fade-in'}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h4 className="profile-name" style={{ fontSize: isSmallScreen ? '1.5rem' : '2rem', fontWeight: 'bold', color: 'white' }}>KAIRI TAKAKI</h4>
          <h6 className="profile-subtitle" style={{ fontSize: isSmallScreen ? '1.2rem' : '1.5rem', fontWeight: 'bold', color: 'white' }}>@Nagoya University, Japan</h6>
        </Col>
      </Row>
    </ProfileContainer>
  );
};

export default Profile;
