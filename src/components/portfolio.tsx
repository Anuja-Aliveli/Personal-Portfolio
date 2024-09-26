import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from '@mui/material';
import { DARK_THEME, USERDATA } from './constants';
import { darkColors, lightColors } from '../theme';

const Portfolio = () => {
  const theme = useTheme();
  const portfolioData = USERDATA.portfolioData;
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: { xs: '20px', md: '0' } }}>
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
        <Grid
          item
          xs={12}
          md={9}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          marginBottom={2}>
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
                  marginBottom: { xs: '15px', md: '10px' },
                  marginRight: { xs: '15px', md: '10px' },
                }}>
                <img src={item.url} alt={item.techName} className="skill-img" />
                <Typography component="h1" variant="h6" marginTop={1}>
                  {item.techName}
                </Typography>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h1" variant="h1">
            Experience
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box>
            <Stepper
              orientation="vertical"
              nonLinear
              sx={{ marginLeft: '10%' }}>
              {portfolioData.experienceList.map((step, index) => (
                <Step key={index} active={true}>
                  <StepLabel sx={{ display: 'flex' }}>
                    <Typography
                      component="h1"
                      variant="h4"
                      sx={{ marginRight: '20px' }}>
                      {step.companyName}
                    </Typography>
                    <Typography
                      component="h1"
                      variant="h4"
                      color="textSecondary">
                      {step.designation}
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <List>
                      {step.description.map((point, index) => (
                        <ListItem key={index} sx={{ padding: '0' }}>
                          <ListItemText>
                            <Typography variant="body2">
                              {point.trim()}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
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

export default Portfolio;
