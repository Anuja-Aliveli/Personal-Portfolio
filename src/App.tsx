import React, { SyntheticEvent, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { DARK_THEME, HOME, LIGHT_THEME } from './components/constants';
import Main from './components/main';
import Header from './components/header';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<string>(HOME);
  const handleTabChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeMode = isDarkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <Header
        tabValue={tabValue}
        handleTabChange={handleTabChange}
        toggleTheme={toggleTheme}
        themeMode={themeMode}
      />
      <Main />
    </ThemeProvider>
  );
};

export default App;
