import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 40,
    height: 100
  },
  slider: {
    width: 300,
  },
  space: {
    width: 50
  }
}));

const TaxiAppBar = ({ refreshHandler, handleChangeDistance }) => {
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
        <Button variant="contained" color="primary" onClick={refreshHandler}>
          Refresh data
        </Button>
        <div className={classes.space}></div>
        <Slider className={classes.slider}
        defaultValue={200}
        onChange={(event, distance) => handleChangeDistance(distance)}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={50}
        marks
        min={50}
        max={1500}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TaxiAppBar;
