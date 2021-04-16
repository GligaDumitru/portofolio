import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const GridItem = ({ children, className, ...rest }) => {
  return (
    <Grid item {...rest} className={`grid-item ${className}`}>
      {children}
    </Grid>
  );
};
GridItem.defaultProps = {
  className: '',
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default GridItem;
