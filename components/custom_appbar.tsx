import React, {ReactNode} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface DenseAppBarProps{
  showTabs?: boolean
  bottom?: ReactNode
}


const DenseAppBar:React.FC<DenseAppBarProps> = ({showTabs, bottom}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            National Science & Math Quiz
          </Typography>
        </Toolbar>
        {showTabs && 
          <Toolbar variant="dense">
            {bottom}
          </Toolbar>
        }
      </AppBar>
    </Box>
  );
}

DenseAppBar.defaultProps = {
  showTabs: true
}

export default DenseAppBar