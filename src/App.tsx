import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { DARK_THEME, LIGHT_THEME } from './components/constants';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeMode = isDarkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <p>Hello, this is a themed application!</p>
        <button onClick={toggleTheme}>
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </ThemeProvider>
  );
};

export default App;
