import {
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import { DARK_THEME, USERDATA } from './constants';
import DownloadIcon from '@mui/icons-material/Download';
import { darkColors, lightColors } from '../theme';

const Home = () => {
  const theme = useTheme();
  const homeData = USERDATA.homeData;

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
        sx={{ padding: { xs: '20px', md: '0' } }}>
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
            <a
              href="/resume.pdf"
              download="Anuja_Resume.pdf"
              style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}>
                Download CV
              </Button>
            </a>
          </Box>
          <Box sx={{ marginTop: '20px' }}>
            {homeData.links.map((item, index) => (
              <IconButton
                sx={{ fontSize: 'small', marginRight: '20px !important' }}
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
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://res.cloudinary.com/dgkw0cxnh/image/upload/v1726770298/Portfolio/Profile_flpmew.jpg"
              alt="profile"
              title="Profile"
              className="profile-img"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <hr
            style={{
              border:
                theme.palette.mode === DARK_THEME
                  ? `1.5px solid ${darkColors.border}`
                  : `1.5px solid ${lightColors.border}`,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
