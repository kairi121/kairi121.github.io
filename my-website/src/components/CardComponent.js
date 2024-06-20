import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, List, ListItem, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  background: 'linear-gradient(45deg, #343a40, #6c757d)',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem', // スマホ用の文字サイズ
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'list-item',
  listStyleType: 'disc',
  paddingTop: '0px',
  paddingBottom: '0px',
  marginTop: '0px', // リストアイテム間の上下の間隔を詰める
  marginBottom: '0px', // リストアイテム間の上下の間隔を詰める
  '&::marker': {
    color: theme?.palette?.text?.secondary || 'black', // デフォルト値を設定
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  whiteSpace: 'pre-line', // 改行を保持
}));

const renderListItems = (items) => {
  return items.map((item, index) => (
    <React.Fragment key={index}>
      {item.title && (
        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', marginLeft: '-16px', marginBottom: '0px' }}>
          {item.title}
        </Typography>
      )}
      {item.citation ? (
        <StyledListItem>
          <Link href={item.href} target="_blank" rel="noopener" sx={{ marginLeft: '-16px', marginBottom: '0px' }}>
            {item.citation}
          </Link>
        </StyledListItem>
      ) : Array.isArray(item.text) ? (
        <List sx={{ paddingLeft: '20px' }}>
          {renderListItems(item.text.map((textItem) => ({ text: textItem })))}
        </List>
      ) : (
        <StyledListItem>
          <StyledTypography variant="body2" color="textSecondary" sx={{ marginLeft: '-16px', marginBottom: '0px' }}>
            {item.text}
          </StyledTypography>
        </StyledListItem>
      )}
    </React.Fragment>
  ));
};

const CardComponent = ({ titleKey, contentKey, isList = false }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const content = t(contentKey, { returnObjects: true });

  return (
    <Card sx={{ margin: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', flex: 1 }} data-aos="fade-up">
      <StyledCardHeader
        title={
          <Typography
            variant="h5" // h5のサイズを適用
            sx={{
              color: '#fff',
              fontWeight: '600', // さらに太くする
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {t(titleKey)}
          </Typography>
        }
      />
      <CardContent sx={{ flexGrow: 1 }}>
        {isList && Array.isArray(content) ? (
          <List sx={{ paddingLeft: '20px' }}>
            {renderListItems(content)}
          </List>
        ) : (
          <StyledTypography variant="body2" color="textSecondary" component="p">
            {content}
          </StyledTypography>
        )}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
