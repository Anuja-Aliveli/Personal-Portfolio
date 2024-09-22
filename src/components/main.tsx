import { Box } from '@mui/material';
import Header from './header';
import { SyntheticEvent, useState } from 'react';
import { HOME } from './constants';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Projects from './projects';
import Services from './services';

const Main = () => {
  const [tabValue, setTabValue] = useState<string>(HOME);
  const handleTabChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };
  return (
    <Box sx={{ width: '100vw', height: '100vh', boxShadow: 'none !important' }}>
      <Header tabValue={tabValue} handleTabChange={handleTabChange} />
      <Home />
      <About />
      <Portfolio />
      <Projects />
      <Services />
    </Box>
  );
};

export default Main;
