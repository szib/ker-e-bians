import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 40,
    height: 100
  }
}));

const TaxiAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="inherit"
      spacing={4}
      elevation={20}
    >
      <Toolbar>
        <Button variant="contained" color="primary">
          Just a button{' '}
          <span role="img" aria-label="emoji">
            😳
          </span>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TaxiAppBar;
