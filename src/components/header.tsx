import { Box, Typography, Tabs, Tab, IconButton } from '@mui/material';
import {
  ABOUT,
  CONTACT,
  DARK_THEME,
  HOME,
  PORTFOLIO,
  PROJECTS,
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
  const { tabValue, handleTabChange, toggleTheme, themeMode } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding="5px">
      <Typography component="h1" variant="h2">
        <Box component="span" className="text-color">
          A
        </Box>
        nuja
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Tabs">
        <Tab label={HOME} value={HOME} />
        <Tab label={ABOUT} value={ABOUT} />
        <Tab label={PORTFOLIO} value={PORTFOLIO} />
        <Tab label={PROJECTS} value={PROJECTS} />
        <Tab label={SERVICES} value={SERVICES} />
        <Tab label={CONTACT} value={CONTACT} />
        <IconButton onClick={toggleTheme} sx={{ marginLeft: '20px' }}>
          {themeMode === DARK_THEME ? <ModeNightIcon /> : <LightModeIcon />}
        </IconButton>
      </Tabs>
    </Box>
  );
};

export default Header;
