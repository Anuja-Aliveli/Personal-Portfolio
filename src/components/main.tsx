import { Box } from '@mui/material';
import Header from './header';
import { SyntheticEvent, useState } from 'react';
import { HOME } from './constants';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Projects from './projects';
import Services from './services';
import Contact from './contact';

const Main = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', boxShadow: 'none !important' }}>
      <Home />
      <About />
      <Portfolio />
      <Projects />
      <Services />
      <Contact />
    </Box>
  );
};

export default Main;
