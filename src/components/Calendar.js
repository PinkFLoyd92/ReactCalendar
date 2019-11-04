import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const SIZE = 35;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paperTitle: {
    height: 100,
    width: 100,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

const Calendar = props => {
  const classes = useStyles();

    return (
    <Grid container className={classes.root} spacing={2}>

        </Grid>

    );
};

Calendar.propTypes = {

};

Calendar.defaultProps = {
};

export default React.memo(Calendar);
