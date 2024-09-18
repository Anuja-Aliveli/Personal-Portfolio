import { Grid, Typography, Box, Button, IconButton } from '@mui/material';
import { USERDATA } from './constants';
import DownloadIcon from '@mui/icons-material/Download';

const Home = () => {
  const homeData = USERDATA.homeData;

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginTop="20px">
        <Grid item xs={12} md={3}>
          <Box>
            <Typography component="p" variant="body1" marginBottom="10px">
              Welcome To My Website
            </Typography>
            <Typography component="h1" variant="h1">
              Hi, I'm
              <Box component="span" className="text-color" display="inline">
                {` ${homeData.name}`}
              </Box>
              <br />
              {homeData.designation}
            </Typography>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}>
              Download CV
            </Button>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            {homeData.links.map((item, index) => (
              <IconButton
                sx={{ fontSize: 'small', marginRight: '20px' }}
                key={index}
                color="primary"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer">
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src="../assets/profile-placeholder.jpg"
              alt="profile"
              title="Profile"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
