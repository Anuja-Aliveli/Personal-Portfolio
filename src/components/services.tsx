import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { DARK_THEME, USERDATA } from './constants';
import { useTheme } from '@mui/material/styles'; // Use MUI's `useTheme` hook, not `@emotion/react`
import { darkColors, lightColors } from '../theme';

const Services = () => {
  const theme = useTheme();
  const servicesContent = USERDATA.servicesData.serviceList;

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
              Services
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid
            container
            spacing={2}
            display="flex"
            flexWrap="wrap"
            justifyContent="center">
            {servicesContent.map((item, index) => {
              return (
                <>
                  <Grid item xs={12} md={3}>
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '16px',
                        marginTop: '16px',
                      }}>
                      <IconButton
                        sx={{
                          fontSize: 'small',
                        }}
                        color="primary">
                        {item.serviceIcon}
                      </IconButton>
                      <Typography
                        component="h1"
                        variant="h3"
                        textAlign="center"
                        marginTop="10px"
                        marginBottom="10px">
                        {item.serviceName}
                      </Typography>
                      <Typography
                        component="p"
                        variant="body2"
                        textAlign="center">
                        {item.serviceContent}
                      </Typography>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
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

export default Services;
