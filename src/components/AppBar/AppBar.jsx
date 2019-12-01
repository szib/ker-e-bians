import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 40,
    height: 100
  },
  slider: {
    width: 300
  },
  space: {
    width: 50
  },
  littlespace: {
    width: 20
  }
}));

const TaxiAppBar = ({
  refreshHandler,
  refreshPathHandler,
  handleChangeDistance,
  handleCheckboxChange
}) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    residentpermit: false,
    paid: false,
    carclub: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    handleCheckboxChange(name, event.target.checked);
  };

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
        <Button
          variant="contained"
          color="primary"
          onClick={refreshPathHandler}
        >
          Refresh path
        </Button>
        <div className={classes.space}></div>
        <Slider
          className={classes.slider}
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
        <div className={classes.space}></div>
        <Checkbox
          checked={state.residentpermit}
          onChange={handleChange('residentpermit')}
          value="paid"
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        Resident Permit
        <div className={classes.littlespace}></div>
        <Checkbox
          checked={state.paid}
          onChange={handleChange('paid')}
          value="paid"
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        Paid
        <div className={classes.littlespace}></div>
        <Checkbox
          checked={state.carclub}
          onChange={handleChange('carclub')}
          value="carclub"
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        Car Sharing
      </Toolbar>
    </AppBar>
  );
};

export default TaxiAppBar;
