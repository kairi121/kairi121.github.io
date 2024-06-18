import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup aria-label="Language Switcher">
      <Button variant="outline-primary" onClick={() => changeLanguage('en')}>EN</Button>
      <Button variant="outline-primary" onClick={() => changeLanguage('jp')}>JP</Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
