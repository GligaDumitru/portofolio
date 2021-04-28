import PropTypes from 'prop-types';
import React from 'react';

import ProgressBar from './../../../shared/ProgressBar/ProgressBar';

const SkillItem = ({ name, color, value }) => {
  return (
    <div className='skill'>
      <div className='skill-name'>
        <span>{name}</span>
      </div>
      <div className='skill-grade'>
        <ProgressBar variant='determinate' color={color} value={value} />
      </div>
    </div>
  );
};
SkillItem.defaultProps = {
  name: 'skill name',
  color: 'gray',
  value: 50,
};

SkillItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
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

export default SkillItem;
