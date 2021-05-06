import FormControl from '@material-ui/core/FormControl';
import { default as InputMUI } from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Input = (props) => {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    multiline,
    ...inputProps
  } = props;

  const labelClasses = classNames({
    [` labelRootError`]: error,
    [` labelRootSuccess`]: success && !error,
  });

  const underlineClasses = classNames({
    underlineError: error,
    underlineSuccess: success && !error,
    underline: true,
    whiteUnderline: white,
  });

  const marginTop = classNames({
    inputRootCustomClasses: inputRootCustomClasses !== undefined,
  });

  const inputClasses = classNames({
    input: true,
    multiline: multiline,
    whiteInput: white,
  });

  let formControlClasses = 'formControl';
  if (!!formControlProps) {
    formControlClasses = classNames({
      [formControlProps.className]: true,
      formControl: true,
    });
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={`labelRoot ${labelClasses}`}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <InputMUI
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: 'disabled',
          underline: underlineClasses,
        }}
        id={id}
        multiline={multiline}
        {...inputProps}
      />
    </FormControl>
  );
};

Input.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
};

export default Input;
