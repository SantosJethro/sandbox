import { Box, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';


export const LinearProgressWithLabel = () => {

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1, minWidth: '120px'}} >
        <LinearProgress 
          variant='indeterminate' 
          // value={progress} 
          color='mainRed'
          // valueBuffer={progress == 100 ? 100 : progress + Math.random() * 10 + Math.random() * 10}
        />
      </Box>
    </Box>
  );
};