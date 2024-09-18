import React, { SyntheticEvent, useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';

const Header = () => {
  const [tabValue, setTabValue] = useState('Home');
  const handleTabChange = (event: SyntheticEvent, newTabValue: string) => {
    setTabValue(newTabValue);
  };
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
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Portfolio" />
        <Tab label="Projects" />
        <Tab label="Services" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  );
};

export default Header;
