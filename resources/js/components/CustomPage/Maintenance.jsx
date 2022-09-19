import React, { useEffect } from 'react';
import { Typography,Stack, Box, Button } from '@mui/material';
import {Construction, PriorityHigh} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useUIStore, useUserInfo } from '../../../store/appStore';
import { render } from 'react-dom';
import { ThemeProvider } from '@mui/system';
import {matDark} from '../../../config/theme';

const useStyles= makeStyles((theme) => ({
  boxShadow: {
    borderRadius: '.75rem',
    boxShadow: '0px 0px 23px 6px rgba(0,0,0,0.74)',
  },
}
));
const Maintenance = () => {
  const classes = useStyles();
  const [uiSizing,actions] = useUIStore();
  
  useEffect(()=>{
    setInterval(()=>{
      console.log('Reload in 5minutes');
      window.location.reload();
    },300000);
  },[]);
 
  return (
    <ThemeProvider theme={matDark}>
      <Box className={classes.boxShadow} height={'96vh'} width={'100%'}>
        <Stack direction='row' justifyContent='center' alignItems='center' sx={{height: '100%' , width: '100%'}}>
          <Construction fontSize='large' color={'warning'} sx={{height: '350px',width: '150px'}} />
          <Stack alignItems='center'>
            <Typography variant='h2' sx={{fontWeight: 'BOLD'}}>
              Maintenance
            </Typography>
            <Typography variant='subtitle1' sx={{fontWeight: 'BOLD'}}>
              The site is under repair Please Wait for a while
            </Typography>
          </Stack>
        
        
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Maintenance;

if (document.getElementById('page-error')) {
  render(<Maintenance />, document.getElementById('page-error'));
}