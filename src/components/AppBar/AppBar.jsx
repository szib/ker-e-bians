import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
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
  },
  toolbar: {
    top: 15
  }
}));

const TaxiAppBar = ({
  refreshHandler,
  refreshPathHandler,
  handleChangeDistance,
  handleCheckboxChange,
  handleChangeFrom,
  handleChangeTo
}) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    residentpermit: true,
    Paid: false,
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
      <Toolbar className={classes.toolbar}>
        <TextField id="outlined-basic" label="From" defaultValue="23 Green Lanes" onChange={handleChangeFrom} variant="outlined" />
        <div className={classes.littlespace}></div>
        <TextField id="outlined-basic" label="To" defaultValue="5 Akenside Rd" onChange={handleChangeTo} variant="outlined" />
        <div className={classes.space}></div>
        <div>
          <Typography id="discrete-slider" gutterBottom>
            Search Radius
          </Typography>
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
        </div>
        <div className={classes.space}></div>
        <Checkbox
          checked={state.residentpermit}
          onChange={handleChange('residentpermit')}
          value="Paid"
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        <Typography variant="subtitle2">Resident Permit</Typography>
        <div className={classes.littlespace}></div>
        <Checkbox
          checked={state.Paid}
          onChange={handleChange('Paid')}
          value="Paid"
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        <Typography variant="subtitle2">Paid</Typography>
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
        <Typography variant="subtitle2">Car Sharing</Typography>
        <div className={classes.space}></div>
        <Button variant="contained" color="primary" onClick={refreshHandler}>
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TaxiAppBar;
