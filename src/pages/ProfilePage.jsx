import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Paper,
  Typography,
  Button,
  Avatar,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
      padding: theme.spacing(2)
    }
  },
  paper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2)
    }
  },
  bigAvatar: {
    width: 120,
    height: 120,
    margin: 'auto'
  }
}));

const ProfilePage = () => {
  const classes = useStyles();
  const [vehicleType, setVehicleType] = useState('car');

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h2" component="h1" align="center">
          Profile
        </Typography>
        <Avatar
          alt="Remy Sharp"
          src="https://avatars1.githubusercontent.com/u/24794788?s=460&v=4"
          className={classes.bigAvatar}
        />
        <Box className={classes.box}>
          <TextField id="name" placeholder="Name" />
          <TextField id="registration" placeholder="Registration" />
          <TextField id="permit" placeholder="Permit" />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Vehicle type</FormLabel>
            <RadioGroup
              aria-label="vehicle-type"
              name="vehicle-type"
              value={vehicleType}
              onChange={event => setVehicleType(event.target.value)}
            >
              <FormControlLabel value="car" control={<Radio />} label="Car" />
              <FormControlLabel value="van" control={<Radio />} label="Van" />
              <FormControlLabel
                value="truck"
                control={<Radio />}
                label="Truck"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Button component={Link} to="/map" variant="contained" color="primary">
          Next
        </Button>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
