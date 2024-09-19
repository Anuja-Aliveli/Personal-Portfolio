import { Box, Grid, Typography } from '@mui/material';
import { USERDATA } from './constants';

const About = () => {
  const aboutContent = USERDATA.aboutData.aboutContent;
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={9}>
          <Box>
            <Typography component="h1" variant="h1" marginBottom={2}>
              About
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <hr
                style={{
                  width: '80px',
                  marginTop: '10px',
                  marginBottom: '10px',
                  marginRight: '10px',
                  border: 'none',
                  borderTop: '2px solid white',
                }}
              />
              <Typography component="p" variant="body1" marginBottom="10px">
                {aboutContent}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <hr />
    </>
  );
};

export default About;
