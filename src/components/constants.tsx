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
    aboutContent:
      'I’m Anuja, a Software Engineer with 1 year of experience in building efficient, user-friendly web and software applications.I’m passionate about solving complex problems and delivering high-quality solutions. Always eager to learn and take on new challenges, I’m excited to collaborate and bring innovative ideas to life.',
  },
  portfolioData: {
    skillsList: [
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769583/Portfolio/Html_5_free_icons_designed_by_Freepik_zgv4ua.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769583/Portfolio/CSS_jtvmta.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769584/Portfolio/Javascript_ygnevi.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769584/Portfolio/React_tkw5ht.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769583/Portfolio/Angular_qdn3to.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769583/Portfolio/Django_wskvly.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769583/Portfolio/nodeJs_vmjaxu.jpg',
      'https://res.cloudinary.com/dgkw0cxnh/image/upload/c_thumb,w_200,g_face/v1726769583/Portfolio/MySQL_wwlktg.jpg',
    ],
  },
  projectsData: {},
  servicesData: {},
  contactData: {},
};
