import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../HomePage.css';

const Profile = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
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
      <Row className="justify-content-center mt-3">
        <Col xs={12}>
          <h4>KAIRI TAKAKI</h4>
          <h6>@Nagoya University, Japan</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
