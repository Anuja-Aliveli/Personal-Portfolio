import { Box, Typography, Tabs, Tab, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery for screen size handling
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PortfolioIcon from '@mui/icons-material/PhotoLibrary'; // Example icon for portfolio
import {
  about,
  ABOUT,
  contact,
  CONTACT,
  DARK_THEME,
  home,
  HOME,
  portfolio,
  PORTFOLIO,
  projects,
  PROJECTS,
  services,
  SERVICES,
} from './constants';

export interface TabPropsInterface {
  tabValue: string;
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  toggleTheme: () => void;
  themeMode: string;
}

const Header = (props: TabPropsInterface) => {
  const { toggleTheme, themeMode, handleTabChange, tabValue } = props;
  const isSmallScreen = useMediaQuery((theme: any) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'background.paper',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        justifyContent: { xs: 'center', md: 'space-around' },
      }}>
      <Typography component="h1" variant="h2">
        <Box component="span" className="text-color">
          A
        </Box>
        nuja
      </Typography>

      <Tabs
        textColor="primary"
        indicatorColor="primary"
        aria-label="Tabs"
        value={tabValue}
        onChange={handleTabChange}
        sx={{ marginLeft: { xs: '15px', md: '0' } }}>
        <Tab
          icon={isSmallScreen ? <HomeIcon /> : undefined}
          label={isSmallScreen ? '' : HOME}
          component={Link}
          to={home}
          smooth={true}
          duration={500}
          value={HOME}
        />
        <Tab
          icon={isSmallScreen ? <InfoIcon /> : undefined}
          label={isSmallScreen ? '' : ABOUT}
          component={Link}
          to={about}
          smooth={true}
          duration={500}
          value={ABOUT}
        />
        <Tab
          icon={isSmallScreen ? <PortfolioIcon /> : undefined}
          label={isSmallScreen ? '' : PORTFOLIO}
          component={Link}
          to={portfolio}
          smooth={true}
          duration={500}
          value={PORTFOLIO}
        />
        <Tab
          icon={isSmallScreen ? <WorkIcon /> : undefined}
          label={isSmallScreen ? '' : PROJECTS}
          component={Link}
          to={projects}
          smooth={true}
          duration={500}
          value={PROJECTS}
        />
        <Tab
          icon={isSmallScreen ? <BuildIcon /> : undefined}
          label={isSmallScreen ? '' : SERVICES}
          component={Link}
          to={services}
          smooth={true}
          duration={500}
          value={SERVICES}
        />
        <Tab
          icon={isSmallScreen ? <ContactMailIcon /> : undefined}
          label={isSmallScreen ? '' : CONTACT}
          component={Link}
          to={contact}
          smooth={true}
          duration={500}
          value={CONTACT}
        />

        <IconButton
          onClick={toggleTheme}
          sx={{ marginLeft: { xs: '0', md: '20px' } }}>
          {themeMode === DARK_THEME ? <ModeNightIcon /> : <LightModeIcon />}
        </IconButton>
      </Tabs>
    </Box>
  );
};

export default Header;
