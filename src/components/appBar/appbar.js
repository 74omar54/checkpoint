import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  title: {
    flexGrow: 1,
    textAlign:'left'
  },
  bar: {
      background: 'rgb(60,179,113)'
  },
  
}));


function ButtonAppBar() {
  const classes = useStyles();

  const handleClick =() => {
      console.log(`thanks for clicking me`)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography  variant="h4" className={classes.title}>
            Austin Small Business
          </Typography>
          <Button  color='inherit'>Listings</Button>
          <Button onClick={handleClick} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;