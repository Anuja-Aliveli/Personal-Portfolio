import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { DARK_THEME, LIGHT_THEME } from './components/constants';
import Main from './components/main';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeMode = isDarkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <button onClick={toggleTheme}>
        Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Main />
    </ThemeProvider>
  );
};

export default App;
