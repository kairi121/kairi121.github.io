import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './components/Header';
import CardComponent from './components/BlogCard';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const blogPosts = [
  {
    id: 1,
    titleKey: 'daily',
    contentKey: 'content1',
    isList: false,
  },
  {
    id: 2,
    titleKey: 'development',
    contentKey: 'content2',
    isList: false,
  },
  {
    id: 3,
    titleKey: 'research',
    contentKey: 'content3',
    isList: false,
  }
  // 追加のブログ記事
];

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <div style={{ 
          background: 'linear-gradient(to right, #d3d3d3, #f8f8ff)', 
          padding: '10px',
          minHeight: '100vh', // ページ全体の高さをカバー
          display: 'flex',
          flexDirection: 'column'
        }}>
      <Container>
        <Typography variant="h2" component="h4" align="center" gutterBottom sx={{ marginTop: 4, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          BLOG
        </Typography>
        <Typography variant="h6" align="center" gutterBottom sx={{ marginBottom: 0 }}>
          {t('clickOrTap')}
        </Typography>
        <Grid container spacing={2}>
          {blogPosts.map(post => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <CardComponent 
                titleKey={post.titleKey} 
                contentKey={post.contentKey} 
                isList={post.isList} 
                link={`/blog/${post.id}`} // リンクを追加
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

export default BlogPage;
