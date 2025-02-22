import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 z-50"
    >
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'हिंदी' : 'English'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;