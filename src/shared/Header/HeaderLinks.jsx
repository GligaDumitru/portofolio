import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import { CloudDownload } from '@material-ui/icons';
import Button from './../Button/Button';

const HeaderLinks = () => (
  <List className='list'>
    <ListItem className='list-item'>
      <Button
        href='https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar'
        color='transparent'
        target='_blank'
        className='nav-link'
      >
        <CloudDownload className='icons' /> Download
      </Button>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram-twitter'
        title='Follow us on twitter'
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <Button
          href='https://twitter.com/CreativeTim?ref=creativetim'
          target='_blank'
          color='transparent'
          className='nav-link'
        >
          <i className='socialIcons fab fa-facebook' />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram-facebook'
        title='Follow us on facebook'
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <Button
          color='transparent'
          href='https://www.facebook.com/CreativeTim?ref=creativetim'
          target='_blank'
          className='nav-link'
        >
          <i className='socialIcons fab fa-facebook' />
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram-tooltip'
        title='Follow us on instagram'
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <Button
          color='transparent'
          href='https://www.facebook.com/CreativeTim?ref=creativetim'
          target='_blank'
          className='nav-link'
        >
          <i className='socialIcons fab fa-instagram' />
        </Button>
      </Tooltip>
    </ListItem>
  </List>
);

export default HeaderLinks;
