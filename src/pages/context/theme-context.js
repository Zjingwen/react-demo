import {createContext} from 'react';
export const themes = {
  light: {
    foregoround: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foregoround: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext(
  themes.dark,
);

