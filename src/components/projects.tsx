import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { DARK_THEME, USERDATA } from './constants';
import { useTheme } from '@mui/material/styles'; // Use MUI's `useTheme` hook, not `@emotion/react`
import { darkColors, lightColors } from '../theme';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const theme = useTheme();
  const projectsContent = USERDATA.projectsData.projectsList;

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
              Projects
            </Typography>
            <Box sx={{ display: 'flex' }}></Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          {projectsContent.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  marginBottom: '20px',
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: { md: '22px' },
                    marginBottom: { xs: '16px', md: '0' },
                    order: { xs: 0, sm: 0, md: isEven ? 1 : 0 },
                  }}>
                  <img
                    src={item.projectImageUrl}
                    alt="profile"
                    title="Profile"
                    className="project-img"
                    style={{
                      marginLeft: '16px',
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Box>

                <Card
                  sx={{
                    marginTop: '16px',
                    padding: '16px',
                    flex: 1,
                    order: { xs: 1, sm: 1, md: isEven ? 0 : 1 },
                  }}>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{ marginBottom: '16px' }}>
                    {item.name}
                  </Typography>
                  {item.content.map((contentItem, contentIndex) => (
                    <Typography
                      component="p"
                      variant="body2"
                      key={contentIndex}>
                      {contentItem}
                    </Typography>
                  ))}
                  <Box sx={{ display: 'flex', marginTop: '20px' }}>
                    <IconButton
                      sx={{ fontSize: 'small', marginRight: '20px !important' }}
                      color="primary"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      Live Demo
                    </IconButton>
                    <IconButton
                      sx={{ fontSize: 'small', marginRight: '20px' }}
                      color="primary"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer">
                      <GitHubIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Box>
            );
          })}
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

export default Projects;
