import { Box, Typography, Tabs, Tab, IconButton } from '@mui/material';
import { Link } from 'react-scroll';
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
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';

export interface TabPropsInterface {
  tabValue: string;
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
  toggleTheme: () => void;
  themeMode: string;
}

const Header = (props: TabPropsInterface) => {
  const { toggleTheme, themeMode, handleTabChange, tabValue } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding="5px"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'background.paper',
        zIndex: 1000,
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
        onChange={handleTabChange}>
        <Tab
          label={HOME}
          component={Link}
          to={home}
          smooth={true}
          duration={500}
          value={HOME}
        />
        <Tab
          label={ABOUT}
          component={Link}
          to={about}
          smooth={true}
          duration={500}
          value={ABOUT}
        />
        <Tab
          label={PORTFOLIO}
          component={Link}
          to={portfolio}
          smooth={true}
          duration={500}
          value={PORTFOLIO}
        />
        <Tab
          label={PROJECTS}
          component={Link}
          to={projects}
          smooth={true}
          duration={500}
          value={PROJECTS}
        />
        <Tab
          label={SERVICES}
          component={Link}
          to={services}
          smooth={true}
          duration={500}
          value={SERVICES}
        />
        <Tab
          label={CONTACT}
          component={Link}
          to={contact}
          smooth={true}
          duration={500}
          value={CONTACT}
        />

        <IconButton onClick={toggleTheme} sx={{ marginLeft: '20px' }}>
          {themeMode === DARK_THEME ? <ModeNightIcon /> : <LightModeIcon />}
        </IconButton>
      </Tabs>
    </Box>
  );
};

export default Header;
