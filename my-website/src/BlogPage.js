import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './components/Header';
import CardComponent from './components/BlogCard';
import Footer from './components/Footer';

const blogPosts = [
  {
    id: 1,
    titleKey: 'firstBlogPostTitle',
    contentKey: 'firstBlogPostContent',
    isList: false,
  },
  {
    id: 2,
    titleKey: 'secondBlogPostTitle',
    contentKey: 'secondBlogPostContent',
    isList: false,
  },
  // 追加のブログ記事
];

const BlogPage = () => {
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
