import { Box, Grid, Typography } from '@mui/material';
import { DARK_THEME, USERDATA } from './constants';
import { useTheme } from '@mui/material/styles'; // Use MUI's `useTheme` hook, not `@emotion/react`
import { darkColors, lightColors } from '../theme';

const About = () => {
  const theme = useTheme();
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
                  borderTop:
                    theme.palette.mode === DARK_THEME
                      ? '2px solid white'
                      : '2px solid #212531',
                }}
              />
              <Typography component="p" variant="body1" marginBottom="10px">
                {aboutContent}
              </Typography>
            </Box>
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

export default About;
