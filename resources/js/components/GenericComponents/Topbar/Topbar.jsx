import React, { Fragment, useEffect, useState } from 'react';
import { Box, Toolbar, Typography, Button, Avatar, Stack, ClickAwayListener, Tooltip, LinearProgress, Backdrop } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowDropDown, ArrowDropUp, DarkMode, LightMode, Logout, } from '@mui/icons-material';
import {useTheme, useUIStore, useUserInfo } from '../../../store/appStore';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { logoutUser } from '../../../config/apisauce';
import { useLocation, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    height: 32,
    ml: 3,
    mr: 1
  },
  avatar: {
    height: '28px',
    fontSize: '15px',
  },
  chatButton: {
    marginRight: '20px',
    borderRadius: '07px',
    padding: '07px 15px',
  },
  backDrop: {
    marginTop: theme.props.topBarheight,
    zIndex: 999
  }
})
);

const Topbar = (props) => {
  const { hideContent } = props;
  const classes = useStyles();
  const [userInfo,] = useUserInfo();
  const [{ loader }] = useUIStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [popOverState, setPopOverState] = useState(false);
  const [theme, actions] = useTheme();
  const [, setDefaultTheme] = useLocalStorage('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const handlePopover = () => {
    setPopOverState(prev => !prev);
  };

  const handleClosePopover = () => {
    setPopOverState(false);
  };

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result.status == 200) {
      socket.disconnect();
      window.location.replace('/login');
      actions.setUserDetails(null);
    }
  };


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    actions.setTheme(newTheme);
    setDefaultTheme(newTheme);
  };


  return (
    <Fragment>
      <Toolbar >
        <Box
          component="img"
          className={classes.logoContainer}
          src='/assets/img/empty.png'
        />
        <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
          Template V2
        </Typography>
        <Box flexGrow={1} />
       
        <ClickAwayListener onClickAway={handleClosePopover}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            open={popOverState}
            onClose={handleClosePopover}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
            title={(
              <Fragment>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Avatar className={classes.avatar} sx={{ bgcolor: '#fff', color: '#000', width: '25px', height: '25px' }} >{userInfo?.name?.charAt(0)}</Avatar>
                    <Typography sx={{ marginLeft: '1px !important' }}>{userInfo?.name.substr(1)}</Typography>
                  </Stack>

                  <Button
                    variant='contained'
                    fullWidth
                    onClick={toggleTheme}
                    size='small'
                    color='info'
                    startIcon={theme == 'light' ? <LightMode color='warning' /> : <DarkMode sx={{ color: '#3e4045' }} />}
                  >
                    {theme} Theme
                  </Button>

                  <Button
                    variant='contained'
                    fullWidth onClick={() => handleLogout()}
                    size='small'
                    color='error'
                    startIcon={<Logout />}
                  >
                    Logout
                  </Button>

                </Stack>
              </Fragment>
            )}
          >
            <Button
              variant='text'
              onClick={handlePopover}
              startIcon={<Avatar className={classes.avatar} sx={{ bgcolor: '#fff', color: '#000' }}>{userInfo?.name?.charAt(0)}</Avatar>}
              color='neutral'
              size='small'
              endIcon={popOverState ? <ArrowDropUp /> : <ArrowDropDown />}>
              {userInfo?.name}
            </Button>
          </Tooltip>
        </ClickAwayListener>
      </Toolbar>

      {
        loader && (
          <Fragment>
            <LinearProgress />
          </Fragment>
        )
      }

      <Backdrop
        open={loader || hideContent}
        className={classes.backDrop}
        transitionDuration={{ appear: 1000, enter: 1000 }}
        sx={{ display: loader || hideContent ? 'block' : 'none' }}
      />
    </Fragment>
  );
};

export default Topbar;
