import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Header from './components/Header';

const blogPosts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the full content of the first blog post.'
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is the full content of the second blog post.'
  },
  // 追加のブログ記事
];

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // ここで直接値を指定
  marginTop: theme.spacing(4),
}));

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <Typography variant="h6" component="div">Post not found</Typography>;
  }

  return (
    <div>
      <Header />
      <Box sx={{ backgroundColor: '#e0e0e0', minHeight: '100vh', padding: 2 }}>
        <StyledContainer>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
            {post.title}
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#666' }}>
            {post.content}
          </Typography>
        </StyledContainer>
      </Box>
    </div>
  );
};

export default BlogPostPage;
