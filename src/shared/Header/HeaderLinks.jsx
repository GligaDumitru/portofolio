import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

import GDResume from '../../assets/files/resumeGliga.pdf';
import Button from './../Button/Button';

const HeaderLinks = () => (
  <List className='list'>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram-twitter'
        title='Download resume'
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <Button
          href={GDResume}
          target='_blank'
          // download='GligaDumitruResume.pdf'
          color='transparent'
          className='nav-link'
        >
          <i className='fas fa-download'></i>{' '}
          <span className='onMobile'>Download Resume</span>
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram-twitter'
        title="Let's chat on Facebook"
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <Button
          href='https://www.facebook.com/GligaDumitruDaniel'
          target='_blank'
          color='transparent'
          className='nav-link'
        >
          <i className={'fab fa-facebook'} />
          <span className='onMobile'>Let's chat on Facebook</span>
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='linkedin'
        title="Let's connect on Linkedin"
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <Button
          href='https://www.linkedin.com/in/gligadumitru/'
          color='transparent'
          target='_blank'
          className='nav-link'
        >
          <i className={'fab fa-linkedin'} />
          <span className='onMobile'>Let's connect on Linkedin</span>
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram'
        title='Follow me on Instagram'
        placement={'bottom'}
      >
        <Button
          href='https://www.instagram.com/ddaniidaniell/'
          color='transparent'
          target='_blank'
          className='nav-link'
        >
          <i className={'fab fa-instagram'} />
          <span className='onMobile'>Follow me on Instagram</span>
        </Button>
      </Tooltip>
    </ListItem>
    <ListItem className='list-item'>
      <Tooltip
        id='instagram'
        title='Checkout my repositories'
        placement={'bottom'}
      >
        <Button
          href='https://github.com/GligaDumitru'
          color='transparent'
          target='_blank'
          className='nav-link'
        >
          <i className={'fab fa-github'} />
          <span className='onMobile'>Follow me on Instagram</span>
        </Button>
      </Tooltip>
    </ListItem>
  </List>
);

export default HeaderLinks;
