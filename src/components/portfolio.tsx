import { Box, Grid, Typography, useTheme } from '@mui/material';
import { DARK_THEME, USERDATA } from './constants';
import { darkColors, lightColors } from '../theme';

const Portfolio = () => {
  const theme = useTheme();
  const portfolioData = USERDATA.portfolioData;
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={9}>
          <Box>
            <Typography
              component="h1"
              variant="h1"
              marginBottom={2}
              textAlign="center">
              Portfolio
            </Typography>
            <Typography component="h1" variant="h1" marginBottom={2}>
              Skills
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9} display="flex" justifyContent="space-between">
          {portfolioData.skillsList.map((item, index) => {
            return (
              <Box
                key={index}
                className="skill-container"
                sx={{
                  background:
                    theme.palette.mode === DARK_THEME
                      ? darkColors.background.secondary
                      : lightColors.background.secondary,
                }}>
                <img src={item.url} alt={item.techName} className="skill-img" />
                <Typography component="h1" variant="h6" marginTop={1}>
                  {item.techName}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12} md={9}>
        <hr
          style={{
            border:
              theme.palette.mode === DARK_THEME
                ? `2px solid ${darkColors.border}`
                : `2px solid ${lightColors.border}`,
          }}
        />
      </Grid>
    </>
  );
};

export default Portfolio;
