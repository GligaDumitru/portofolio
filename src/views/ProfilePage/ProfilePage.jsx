import Tooltip from '@material-ui/core/Tooltip';
import React from 'react';

import bg7 from '../../assets/img/bg2.jpg';
import profile from '../../assets/img/faces/dan.png';
import { default as Button } from './../../shared/Button/Button';
import GridContainer from './../../shared/Grid/GridContainer';
import GridItem from './../../shared/Grid/GridItem';
import Header from './../../shared/Header/Header';
import HeaderLinks from './../../shared/Header/HeaderLinks';
import Parallax from './../../shared/Parallax/Parallax';
import ProgressBar from './../../shared/ProgressBar/ProgressBar';
import SkillItem from './components/skillItem';

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
                    <Tooltip
                      id='instagram'
                      title='Follow me on Instagram'
                      placement={'bottom'}
                    >
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.instagram.com/ddaniidaniell/'
                      >
                        <Button justIcon link>
                          <i className={'fab fa-instagram'} />
                        </Button>
                      </a>
                    </Tooltip>
                    <Tooltip
                      id='facebook'
                      title='Chat with me on Facebook'
                      placement={'bottom'}
                    >
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.facebook.com/GligaDumitruDaniel'
                      >
                        <Button justIcon link>
                          <i className={'fab fa-facebook'} />
                        </Button>
                      </a>
                    </Tooltip>

                    <Tooltip
                      id='linkedin'
                      title="Let's connect on Linkedin"
                      placement={'bottom'}
                    >
                      <a
                        title='Linkedin'
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/gligadumitru/'
                      >
                        <Button justIcon link>
                          <i className={'fab fa-linkedin'} />
                        </Button>
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className='description'>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
            </div>
            <div className='skills'>
              <div className='title'>
                <h3>Skills</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <SkillItem name='HTML5' color='success' value='90' />
                  <SkillItem name='CSS3' color='success' value='90' />
                  <SkillItem name='JavaScript' color='success' value='85' />
                  <SkillItem name='SCSS' color='primary' value='80' />
                  <SkillItem name='MaterialUI' color='primary' value='70' />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <SkillItem name='ReactJS' color='success' value='90' />
                  <SkillItem name='Redux' color='success' value='85' />
                  <SkillItem name='NodeJS' color='info' value='65' />
                  <SkillItem name='ExpressJS' color='info' value='55' />
                  <SkillItem name='MongoDB' color='info' value='50' />
                  <SkillItem name='GraphQL' color='info' value='35' />
                  <SkillItem name='Angular2+' color='info' value='15' />
                </GridItem>
              </GridContainer>
            </div>
            <div className='skills'>
              <div className='title'>
                <h3>Tools</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <SkillItem name='Git' color='success' value='90' />
                  <SkillItem name='VSCode' color='success' value='85' />
                  <SkillItem name='Jira' color='primary' value='80' />
                  <SkillItem name='Jenkins' color='primary' value='80' />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <SkillItem name='Lodash' color='info' value='90' />
                  <SkillItem name='MomentJS' color='info' value='85' />
                  <SkillItem name='Redux DevTools' color='info' value='75' />
                  <SkillItem name='React DevTools' color='info' value='75' />
                  <SkillItem name='PWA' color='info' value='45' />
                </GridItem>
              </GridContainer>
            </div>
            <div className='clear-space 100'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
