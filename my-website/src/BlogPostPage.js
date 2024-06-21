import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';

const blogPosts = [
  {
    id: 1,
    titleKey: 'content1',
    sections: [
      { type: 'content', value: '名古屋大学 大学院 河口研究室所属の髙木魁利です。' },
      { type: 'image', value: '/images/profile1.jpg' },
      { type: 'content', value: '' }
    ]
  },
  {
    id: 2,
    titleKey: 'content2',
    sections: [
      { type: 'image', value: '/images/photo2.jpg' },
      { type: 'content', value: 'Coming soon ...' }
    ]
  },
  {
    id: 3,
    titleKey: 'content3',
    sections: [
      { type: 'content', value: 'Coming soon ...' }
    ]
  }
  // 追加のブログ記事
];

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: theme.spacing(4),
}));

const BlogPostPage = () => {
  const { t } = useTranslation();
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
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>
            {t(post.titleKey)}
          </Typography>
          {post.sections.map((section, index) => (
            <Box key={index} sx={{ textAlign: section.type === 'image' ? 'center' : 'left', marginBottom: 2 }}>
              {section.type === 'content' ? (
                <Typography variant="body1" component="div" sx={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#666' }}>
                  {section.value}
                </Typography>
              ) : (
                <img src={section.value} alt={t(post.titleKey)} style={{ maxWidth: '100%', borderRadius: '8px' }} />
              )}
            </Box>
          ))}
        </StyledContainer>
      </Box>
    </div>
  );
};

export default BlogPostPage;
