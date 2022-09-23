import { Grow } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ThemeProvider from './ThemeProvider';

const RootProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3} 
        iconVariant={{
          success: '✅',
          error: '✖️',
          warning: '⚠️',
          info: 'ℹ️',
        }}
        anchorOrigin= {{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        TransitionComponent={Grow}
      >
        { children }
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default RootProvider;