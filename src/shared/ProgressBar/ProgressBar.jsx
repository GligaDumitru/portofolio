import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const ProgressBar = (props) => {
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: `root ${color}-background`,
        bar: `root ${color}`,
      }}
    />
  );
};

ProgressBar.defaultProps = {
  color: 'gray',
};

ProgressBar.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
};

export default ProgressBar;
