import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const CustomButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...otherProps
  } = props;

  const buttonClasses = classNames({
    button: true,
    [size]: size,
    [color]: color,
    round: round,
    fullWidth,
    disabled,
    simple,
    block,
    link,
    justIcon,
    [className]: className,
  });

  return (
    <Button {...otherProps} ref={ref} className={buttonClasses}>
      {children}
    </Button>
  );
});

CustomButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'facebook',
    'twitter',
    'google',
    'github',
    'transparent',
  ]),
  size: PropTypes.oneOf(['sm', 'lg']),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CustomButton;
