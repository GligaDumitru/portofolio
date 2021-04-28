import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//MUI Elements
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const Header = ({
  color,
  absolute,
  fixed,
  rightLinks,
  leftLinks,
  brand,
  changeColorOnScroll,
}) => {
  let history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const appBarClasses = classNames({
    appBar: true,
    [color]: !!color,
    absolute,
    fixed,
  });

  useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const windowScrollTop = window.pageYOffset;
    if (windowScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove([color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add([changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add([color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove([changeColorOnScroll.color]);
    }
  };

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className='container'>
        <Button onClick={() => history.push('/')} className='title'>
          {brand}
        </Button>
        <div className='flex'>
          {!!leftLinks && (
            <Hidden smDown implementation='css'>
              {leftLinks}
            </Hidden>
          )}
        </div>
        <Hidden smDown implementation='css'>
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='open-drawer'
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation='js'>
        <Drawer
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <div className='appResponsive'>
            <div
              className='closeModalHeader'
              onClick={() => setMobileOpen(false)}
            >
              <i class='fas fa-bars'></i>
            </div>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

Header.defaultProp = {
  color: 'white',
};

Header.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark',
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark',
    ]).isRequired,
  }),
};

export default Header;
