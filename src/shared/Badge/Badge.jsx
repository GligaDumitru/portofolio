import PropTypes from 'prop-types';
import React from 'react';

const Badge = (props) => {
  const { color, children } = props;
  return <span className={`badge ${color}`}>{children}</span>;
};
Badge.defaultProps = {
  color: 'gray',
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray',
  ]),
  children: PropTypes.node,
};

export default Badge;
