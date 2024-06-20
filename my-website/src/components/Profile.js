import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../HomePage.css';

const Profile = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container style={{ textAlign: 'center', marginTop: '1rem' }} >
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Col xs={12} md={6} lg={4}>
          <div className="circle-container">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Profile Image"
              className="circle-image"
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '1rem' }}>
        <Col xs={12}>
          <h4 style={{ fontSize: isSmallScreen ? '1.5rem' : '2rem' }}>KAIRI TAKAKI</h4>
          <h6 style={{ fontSize: isSmallScreen ? '1.2rem' : '1.5rem' }}>@Nagoya University, Japan</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

