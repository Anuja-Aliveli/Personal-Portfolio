import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import ApiIcon from '@mui/icons-material/Api';
import DevicesIcon from '@mui/icons-material/Devices';
import LayersIcon from '@mui/icons-material/Layers';
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
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032373/Portfolio/icons8-html-logo-60_tymu81.png',
        techName: 'HTML',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-css-logo-60_zk82fc.png',
        techName: 'CSS',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-javascript-logo-60_loyhav.png',
        techName: 'JavaScript',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-react-60_mpa6dl.png',
        techName: 'React',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-angularjs-60_pgcn4o.png',
        techName: 'Angular',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-python-60_klysvc.png',
        techName: 'Django',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-node-js-60_kwdzvu.png',
        techName: 'Node.js',
      },
      {
        url: 'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1727032003/Portfolio/icons8-mysql-logo-60_xqxfih.png',
        techName: 'MySQL',
      },
    ],
    experienceList: [
      {
        companyName: 'ProQsmart',
        designation: 'Software Engineer (Nov 2023 - Present)',
        description: [
          'Led a team of interns at a nuclear startup, contributing to the development of key product features.',
          'Designed and developed a real- time live auction system using Firebase and Redux.',
          'Enhanced API performance, reducing response times to under 1 second, improving overall user experience.',
          'Pioneered the integration of Redux, reducing frontend load time from 5 seconds to 500 milliseconds.',
          'Implemented middleware to manage role - based access control(RBAC) for secure application access.',
          'Developed a reusable component library using Material- UI, integrated with Storybook for streamlined UI development.',
        ],
      },
      {
        companyName: 'InternPe',
        designation: 'Web Developer (Oct 2023 to Nov 2023)',
        description: [
          'Developed four applications: a Calculator, a To-Do List, an E-commerce app, and a Connecting Dots game.',
        ],
      },
    ],
  },
  projectsData: {
    projectsList: [
      {
        name: 'Issue Tracker',
        content: [
          'Problem: Tracking and managing issues across different project aspects like frontend,backend, and testing is often disorganized,causing delays and inefficiencies.',
          'Flexible Project Management: Supports both organizational and personal projects.',
          'Advanced Access Control: Implements (RBAC) for organizational projects.',
          'Community Engagement: Enables users to follow others, view public projects.',
          'Open Source Initiative: An ongoing project that will be published as open source, inviting contributions and enhancements from the global developer community.',
        ],
        link: '#',
        github: 'https://github.com/Anuja-Aliveli/frontend_issue_tracker',
        projectImageUrl:
          'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1726770298/Portfolio/Profile_flpmew.jpg',
      },
      {
        name: 'Travel App',
        content: [
          'User-Centric Experience: Designed to facilitate seamless trip planning and booking for both domestic and international users.',
          'Comprehensive Travel Solutions: Provides users with personalized destination recommendations, booking options, and detailed tour information.',
          'Engaging Content: Showcases popular destinations and tour packages, enhancing user engagement and decision-making.',
        ],
        link: 'https://anujatravelclient.netlify.app/',
        github: 'https://github.com/Anuja-Aliveli/Travel',
        projectImageUrl:
          'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1726770298/Portfolio/Profile_flpmew.jpg',
        technologies: ['React', 'Node.Js', 'MongoDB'],
      },
      {
        name: 'Emoji Game',
        content: [
          'The Emoji Game Project is a ReactJS-based memory game where the player needs to click on 12 unique emojis without repeating any.',
          "The game keeps track of the score and the app updates the score and top score based on the player's performance.",
          "The app updates the score and top score based on the player's performance.",
        ],
        link: 'https://anujaemoji.ccbp.tech/',
        github: 'https://github.com/Anuja-Aliveli/emojiGame',
        projectImageUrl:
          'https://res.cloudinary.com/dgkw0cxnh/image/upload/v1726770298/Portfolio/Profile_flpmew.jpg',
        technologies: ['React'],
      },
    ],
  },
  servicesData: {
    serviceList: [
      {
        serviceIcon: <CodeIcon />, // React and Angular
        serviceName: 'Frontend Development',
        serviceContent:
          'Building responsive and dynamic user interfaces using React and Angular.',
      },
      {
        serviceIcon: <WebIcon />, // Node.js and Django
        serviceName: 'Backend Development',
        serviceContent:
          'Developing robust server-side applications using Node.js and Django.',
      },
      {
        serviceIcon: <StorageIcon />, // Databases
        serviceName: 'Database Management',
        serviceContent:
          'Designing and maintaining relational databases using MySQL and PostgreSQL.',
      },
      {
        serviceIcon: <LayersIcon />, // Full stack
        serviceName: 'Full Stack Development',
        serviceContent:
          'End-to-end web development, for scalable web applications.',
      },
      {
        serviceIcon: <ApiIcon />, // APIs
        serviceName: 'API Development',
        serviceContent:
          'Building and integrating RESTful APIs with secure authentication',
      },
      {
        serviceIcon: <DevicesIcon />, // Responsive design
        serviceName: 'Responsive Design',
        serviceContent:
          'Creating websites that work seamlessly across various devices and screen sizes.',
      },
    ],
  },
  contactData: {},
};
