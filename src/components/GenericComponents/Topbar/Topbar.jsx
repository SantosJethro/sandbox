import React, { Fragment, useState } from 'react';
import { Box, Toolbar, Typography, Button, Avatar, Stack, ClickAwayListener, Tooltip, LinearProgress, Backdrop } from '@mui/material';
import { ArrowDropDown, ArrowDropUp, DarkMode, LightMode, Logout, } from '@mui/icons-material';
import { useTheme, useUIStore, useUserInfo } from '../../../store/appStore';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useTheme as useMuiTheme} from '@mui/styles';



const Topbar = (props) => {
  const { hideContent } = props;
  const [userInfo,] = useUserInfo();
  const [{ loader }] = useUIStore();
  const [popOverState, setPopOverState] = useState(false);
  const [theme, actions] = useTheme();
  const themeMUi = useMuiTheme();

  const [, setDefaultTheme] = useLocalStorage('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const handlePopover = () => {
    setPopOverState(prev => !prev);
  };

  const handleClosePopover = () => {
    setPopOverState(false);
  };

  const handleLogout = async () => {
    console.log('logiut');
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
          sx={{
            height: 32,
            ml: 3,
            mr: 1
          }}
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
                    <Avatar sx={{
                      bgcolor: '#fff',
                      color: '#000',
                      width: '25px',
                      height: '25px',
                      fontSize: '15px',
                    }} >{userInfo?.name?.charAt(0)}</Avatar>
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
              startIcon={<Avatar sx={{
                bgcolor: '#fff',
                color: '#000',
                height: '28px',
                fontSize: '15px',
              }}>{userInfo?.name?.charAt(0)}</Avatar>}
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
        transitionDuration={{ appear: 1000, enter: 1000 }}
        sx={{
          display: loader || hideContent ? 'block' : 'none', 
          marginTop: themeMUi.props.topBarheight + 'px',
          zIndex: 9999
        }}
      />
    </Fragment>
  );
};

export default Topbar;
