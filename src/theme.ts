import * as locales from '@mui/material/locale';
import { createTheme as MuiStylesCreateTheme } from '@mui/material/styles';

type SupportedLocales = keyof typeof locales;
export const createTheme = (language: string) => {
  const locale = language.replaceAll('-', '') as SupportedLocales  
  return MuiStylesCreateTheme({}, locales[locale])
};