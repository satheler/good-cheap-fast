import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    'pt-BR': {
        translation: {
          'TITLE': 'A escolha é sua',
          'GOOD': 'Bom',
          'CHEAP': 'Barato',
          'FAST': 'Rápido',

          'CHOOSE_A_LANGUAGE': 'Idioma',
          'pt-BR': 'Português',
          'en-US': 'Inglês',
        },
    },
    'en-US': {
        translation: {
          'TITLE': 'The choice is yours',
          'GOOD': 'Good',
          'CHEAP': 'Cheap',
          'FAST': 'Fast',

          'CHOOSE_A_LANGUAGE': 'Language',
          'pt-BR': 'Portuguese',
          'en-US': 'English',
        },
    }
};


i18n.use(initReactI18next)
    .init({
        resources,
        lng: navigator.language in resources ? navigator.language : 'pt-BR',
    });

export default i18n;