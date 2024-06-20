import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup>
      <Button variant="outlined" onClick={() => changeLanguage('en')}>
        EN
      </Button>
      <Button variant="outlined" onClick={() => changeLanguage('jp')}>
        JP
      </Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
