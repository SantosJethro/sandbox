import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Stack, Box, Button, CircularProgress } from '@mui/material';
import { PriorityHigh } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useUIStore, useUserInfo } from '../../store/appStore';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import { matDark } from '../../config/theme';
const useStyles = makeStyles((theme) => ({
  boxShadow: {
    borderRadius: '.75rem',
    boxShadow: '0px 0px 23px 6px rgba(0,0,0,0.74)',
  },
  button: {
    color: theme.palette.mode == 'light' ? '#fff' : '#000' + ' !important',
    borderRadius: '30px !important',
  },
}));
const NotFound = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [userDetails, actions] = useUserInfo();
  const [isLoading, setIsLoading] = useState(true);


  const handleLogout = () => {
    window.location.replace('/login');
   
  };
  useEffect(() => {
    setIsLoading(true);
    const to = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return ()=> clearTimeout(to);
  }, [pathname]);
  return (
    <ThemeProvider theme={matDark}>
      <Box className={classes.boxShadow} height={'96vh'} width={'100%'}>
        <Stack direction='row' justifyContent='center' alignItems='center' sx={{ height: '100%', width: '100%' }}>
          {
            isLoading ?
              <Box>
                <CircularProgress color={'mainRed'} />
              </Box>
              :
              <Fragment>

                <PriorityHigh fontSize='large' color={'error'} sx={{ height: '350px', width: '150px' }} />
                <Stack alignItems='center'>
                  <Typography variant='h2' sx={{ fontWeight: 'BOLD' }}>
                    404 ERROR
                  </Typography>
                  <Typography variant='subtitle1' sx={{ fontWeight: 'BOLD' }}>
                    The Page You&apos;re Trying to Access Doesn&apos;t Exist
                  </Typography>
                  <Stack direction='row' spacing={2}>
                 

                    <Button
                      className={classes.button}
                      variant='contained'
                      color='error'
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </Button>
                  </Stack>
                </Stack>
              </Fragment>
          }
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default NotFound;

if (document.getElementById('page-not-found')) {
  render(<NotFound />, document.getElementById('page-not-found'));
}