import { Dialog, LinearProgress, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const Loader = () => {


  return (
    <Dialog open={true} sx={{backdropFilter: 'blur(50px)'}}
      PaperProps={{
        style:{
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'
        }
      }}
    >
      <Stack direction='column' justifyContent={'center'} alignItems='center'>
        <Box
          component="img"
          sx={{height: '20%', width:'25%', margin: '10px 10px',
          }}
          src='/assets/img/empty.png'
        />
        <Box sx={{ width: '25%', mr: 1, minWidth: '120px'}} >
          <LinearProgress 
            variant='indeterminate'
            color='mainRed'
          />
        </Box>
    
      </Stack>
    </Dialog>
  );
};