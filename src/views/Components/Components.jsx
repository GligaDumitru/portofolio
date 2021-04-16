import React from 'react';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import Header from './../../shared/Header/Header';

const Components = () => {
  return (
    <div>
      <Header
        brand='Components Page'
        fixed
        color='transparent'
        changeColorOnScroll={{ height: '400', color: 'white' }}
        rightLinks={<HeaderLinks />}
      />
    </div>
  );
};

export default Components;
