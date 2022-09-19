import { createTheme } from '@mui/material/styles';
import { grey,red } from '@mui/material/colors';
import { colors } from '@mui/material';

const topBarheight = 64;
const drawerWidth = 72;
const titleColor = '#fff';


const widgetLight = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#b30017'
    },
    success: {
      main: '#30c547'
    },
    info: {
      main: '#61a3e5'
    },
    warning: {
      main: '#edce2a'
    },
    danger: {
      main: '#eb2430'
    },
    neutral: {
      main: '#fff'
    },
    background: {
      default: '#f4f4f4',
      paper: 'transparent',
    },
    text: {
      primary: '#212121',
    }
  },
  shadows: Array(25).fill('none'),
  typography: {
    fontSize: 11,
  },
  props:{
    topBarheight,
    drawerWidth,
    titleColor,
    paperColor: '#fff ! important',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '9px',
            height: '9px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            background: '#e1e1e1',
            border: '0px none #ffffff',
            borderRadius: '78px',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            background: '#000000',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            background: '#e1e1e1',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        },
      },
    },
  },
});

const matLight = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#b30017'
    },
    success: {
      main: '#30c547'
    },
    info: {
      main: '#61a3e5'
    },
    warning: {
      main: '#edce2a'
    },
    danger: {
      main: '#eb2430'
    },
    neutral: {
      main: '#fff'
    },
    mainRed: {
      main: '#b30017'
    },
    background: {
      default: '#f4f4f4',
      // paper: '#D7D6D6',
    },
    text: {
      primary: '#212121',
    }
  },
  shadows: Array(25).fill('none'),
  typography: {
    fontSize: 11,
  },
  props:{
    topBarheight,
    drawerWidth,
    titleColor,
    paperColor: '#fff ! important',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '9px',
            height: '9px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            background: '#e1e1e1',
            border: '0px none #ffffff',
            borderRadius: '78px',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            background: '#000000',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            background: '#e1e1e1',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        },
      },
    },
  },
});

const matDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    },
    success: {
      main: '#30c547'
    },
    info: {
      main: '#61a3e5'
    },
    warning: {
      main: '#edce2a'
    },
    danger: {
      main: '#eb2430'
    },
    neutral: {
      main: '#fff'
    },
    mainRed: {
      main: '#b30017'
    },
    background: {
      default: '#212121',
      // paper: grey[700]
    },
    // text: {
    //   primary: '#000',
    // }
  },
  shadows: Array(25).fill('none'),
  typography: {
    fontSize: 11,
  },
  props:{
    topBarheight,
    drawerWidth,
    titleColor,
    paperColor: '#121212 !important',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: '9px',
            height: '9px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            background: '#e1e1e1',
            border: '0px none #ffffff',
            borderRadius: '78px',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            background: '#000000',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            background: '#e1e1e1',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            background: 'transparent',
          },
        },
      },
    },
  },
});

export {
  matLight,matDark,widgetLight
};