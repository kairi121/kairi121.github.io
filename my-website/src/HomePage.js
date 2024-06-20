import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import CardComponent from './components/CardComponent';
import { Container, Grid } from '@mui/material';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Container style={{ 
          background: 'linear-gradient(to right,#d3d3d3 , #f8f8ff)', 
          padding: '10px',
        }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="aboutMe" contentKey="aboutMeContent" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="education" contentKey="educationContent" isList={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="publication" contentKey="publicationContent" isList={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="awards" contentKey="awardsContent" isList={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="hobbies" contentKey="hobbiesContent" isList={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="skills" contentKey="skillContent" isList={true} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ display: 'flex' }}>
            <CardComponent titleKey="intern" contentKey="internContent" isList={true} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
