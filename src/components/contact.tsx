import { Box, Grid, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Use MUI's `useTheme` hook, not `@emotion/react`
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={9} marginBottom="16px">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Typography component="h1" variant="h1" marginBottom={2}>
              Contact
            </Typography>
            <Typography component="p" variant="body2">
              Have a project in mind?
            </Typography>
            <IconButton
              sx={{ fontSize: 'large', marginTop: '10px' }}
              color="primary">
              <EmailIcon />
              <Typography component="h1" variant="h4" marginLeft="10px">
                a.anuja54@gmail.com
              </Typography>
            </IconButton>
            <Typography component="h1" variant="h4" marginTop="10px">
              Thanks for scrolling!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
