import React, { useEffect } from 'react';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { matLight,matDark } from '../../config/theme';
import { ThemeSubscriber, useAppStore } from '../../store/appStore';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const ThemeProvider = ({ children }) => {  
  const [,actions] = useAppStore();
  const [defaultTheme] = useLocalStorage('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  useEffect(() => {
    actions.setTheme(defaultTheme);
  }, [actions, defaultTheme]);

  return (
    <ThemeSubscriber>
      {(theme) => (
        <MaterialThemeProvider theme={theme=== 'light' ? matLight :matDark }>
          { children }
        </MaterialThemeProvider>
      )}
    </ThemeSubscriber>
  );
};

export default ThemeProvider;