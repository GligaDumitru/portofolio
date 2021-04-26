import React from 'react';

import bg7 from '../../assets/img/bg2.jpg';
import profile from '../../assets/img/faces/dan.png';
import { default as Button } from './../../shared/Button/Button';
import GridContainer from './../../shared/Grid/GridContainer';
import GridItem from './../../shared/Grid/GridItem';
import Header from './../../shared/Header/Header';
import HeaderLinks from './../../shared/Header/HeaderLinks';
import Parallax from './../../shared/Parallax/Parallax';

const ProfilePage = () => {
  return (
    <>
      <Header
        brand='Profile Page'
        fixed
        color='transparent'
        changeColorOnScroll={{ height: '200', color: 'white' }}
        rightLinks={<HeaderLinks />}
      />
      <div className='profile-wrapper'>
        <Parallax small filter image={bg7} />
        <div className='main main-raised'>
          <div className='container'>
            <GridContainer justify='center'>
              <GridItem xs={12} sm={12} md={8}>
                <div className='profile'>
                  <div>
                    <img
                      src={profile}
                      alt='profile'
                      className='img-raised img-circle img-fluid'
                    />
                  </div>
                  <div className='name'>
                    <h3 className='title'>Gliga Dumitru</h3>
                    <q>
                      Anything that can be Written in JavaScript, will
                      Eventually be Written in JavaScript
                    </q>
                    <h6>John M. Wright, Stack Overflow</h6>
                    <Button justIcon link>
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button justIcon link>
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button justIcon link>
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
