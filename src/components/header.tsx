import { Box, Typography, Tabs, Tab } from '@mui/material';
import {
  ABOUT,
  CONTACT,
  HOME,
  PORTFOLIO,
  PROJECTS,
  SERVICES,
} from './constants';

export interface TabPropsInterface {
  tabValue: string;
  handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

const Header = (props: TabPropsInterface) => {
  const { tabValue, handleTabChange } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
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
      </Tabs>
    </Box>
  );
};

export default Header;
