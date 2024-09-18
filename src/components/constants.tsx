import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Theme Constants
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

// Tab Constants
export const HOME = 'Home';
export const ABOUT = 'About';
export const PORTFOLIO = 'Portfolio';
export const PROJECTS = 'Projects';
export const SERVICES = 'Services';
export const CONTACT = 'Contact';

export const USERDATA = {
  homeData: {
    name: 'Anuja Aliveli',
    designation: 'Software Engineer',
    links: [
      {
        icon: <LinkedInIcon />,
        link: 'https://www.linkedin.com/in/anuja-aliveli-8a2b9525a/',
      },
      { icon: <GitHubIcon />, link: 'https://github.com/Anuja-Aliveli' },
    ],
  },
  aboutData: {
    aboutContent: '',
  },
  portfolioData: {},
  projectsData: {},
  servicesData: {},
  contactData: {},
};
