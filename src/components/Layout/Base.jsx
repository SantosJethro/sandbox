import React, {useState,useEffect} from 'react';
import { Box, CssBaseline, AppBar, Drawer,  } from '@mui/material';
import SidebarList from '../GenericComponents/Sidebar/SidebarList';
import { makeStyles, useTheme } from '@mui/styles';
import clsx from 'clsx';
import { useUserInfo } from '../../store/appStore';
import useWindowSize from '../../hooks/useWindowSize';
import Topbar from '../GenericComponents/Topbar/Topbar';
import { Outlet, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      '-ms-overflow-style': '-ms-autohiding-scrollbar',
      '--scrollbarBG': 'transparent',
      '--thumbBG': theme.palette.grey[500],
    },
    body: {
      scrollbarWidth: 'thin',
      scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)'
    },
    '*::-webkit-scrollbar-track': {
      background: 'var(--scrollbarBG)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--thumbBG)',
      borderRadius: '6px',
      border: `3px solid ${theme.palette.background.default}`
    },
    '*::-webkit-scrollbar': {
      width: '11px'
    },
    
  },
  root: {
    display: 'flex',
    position: 'relative',
  },
  drawerOperator: {
    width: '60px',
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    overflow: 'hidden !important',
  },
  innerDrawer: {
    overflowX: 'hidden',
    width: theme.props.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }) + ' !important',
    marginTop: theme.props.topBarheight
  },
  innerDrawerHovered: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      delay: '150ms',
    }) + ' !important',
    width: '200px',
    overflowX: 'hidden',
    marginTop: theme.props.topBarheight
  },
  mainBox: {
    marginTop: theme.props.topBarheight/2 + 5,
    marginLeft: theme.props.drawerWidth/2 + 5,
  },
  topBar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}));

const Base = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const {height,width} = useWindowSize();
  const { drawer } = props;
  const { pathname } = useLocation();

  const [user, actions] = useUserInfo();
  const [drawerState,setDrawerState] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerState(true);
  };

  const handleDrawerClose = () => {
    setDrawerState(false);

  };

  const getUserDetails = () => {
    console.log('get user infor');
  };

  useEffect(() => {
    actions.setContentBoxHeight(height - theme.props.topBarheight - parseInt(theme.spacing(5)) - 4);
    actions.setContentBoxWidth(width - theme.props.drawerWidth - parseInt(theme.spacing(6)));  
  }, [width, height, actions, theme]);


  useEffect(() => {
    getUserDetails();
  
  },[pathname]);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" sx={{backgroundColor: '#b30017', zIndex: 1100}}>
        <Topbar hideContent={drawerState}/>
      </AppBar>

      <Drawer variant="permanent"
        classes={{
          paper: clsx(classes.innerDrawer, {
            [classes.innerDrawerHovered]: drawerState,
          }),
        }}
        onMouseEnter={handleDrawerOpen} 
        onMouseLeave={handleDrawerClose}
      >
        {/* <Box className={classes.topBar} /> */}
        {drawer || <SidebarList permissions={user?.permissions ?? []}/>}
      </Drawer>
      <Box component="main" className={classes.mainBox}>
        <Outlet/>
      </Box>
      
    </Box>
  );
};

export default Base;
