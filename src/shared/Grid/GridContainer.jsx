import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const GridContainer = ({ children, className, ...rest }) => {
  return (
    <Grid container {...rest} className={`grid-container ${className}`}>
      {children}
    </Grid>
  );
};

GridContainer.defaultProps = {
  className: '',
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default GridContainer;
