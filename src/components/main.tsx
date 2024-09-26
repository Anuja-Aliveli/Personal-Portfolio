import { Box } from '@mui/material';
import { Element } from 'react-scroll';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Projects from './projects';
import Services from './services';
import Contact from './contact';
import {
  about,
  contact,
  home,
  portfolio,
  projects,
  services,
} from './constants';

const Main = () => {
  return (
    <Box sx={{ boxShadow: 'none !important', marginTop: '50px' }}>
      <Element name={home} id={home}>
        <Home />
      </Element>
      <Element name={about} id={about}>
        <About />
      </Element>
      <Element name={portfolio} id={portfolio}>
        <Portfolio />
      </Element>
      <Element name={projects} id={projects}>
        <Projects />
      </Element>
      <Element name={services} id={services}>
        <Services />
      </Element>
      <Element name={contact} id={contact}>
        <Contact />
      </Element>
    </Box>
  );
};

export default Main;
