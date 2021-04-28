import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';

import bg7 from '../../assets/img/bg2.jpg';
import me4 from '../../assets/img/faces/me4.jpg';
import Badge from './../../shared/Badge/Badge';
import GridContainer from './../../shared/Grid/GridContainer';
import GridItem from './../../shared/Grid/GridItem';
import Header from './../../shared/Header/Header';
import HeaderLinks from './../../shared/Header/HeaderLinks';
import Parallax from './../../shared/Parallax/Parallax';
import CustomizedTimeline from './components/CustomizedTimeline';
import SkillItem from './components/SkillItem';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
const TOOLS = [
  'Git',
  'VSCode',
  'Jira',
  'Jenkins',
  'Lodash',
  'MomentJS',
  'Redux DevTools',
  'React DevTools',
  'PWA',
];
const CERTIFICATIONS = [
  {
    left: {
      title: 'Zero To Mastery Academy',
      description: 'April 2021',
    },
    icon: <VerifiedUserIcon />,
    right: {
      title: 'Udemy',
      description: `Complete React Developer Course 2021(w/ Redux, Hooks, GraphQL)`,
      links: [
        {
          label: 'View Certification',
          linkTo:
            'https://www.udemy.com/certificate/UC-cccbf0f8-32db-4c42-b96a-1aeef8bcf7c5/',
        },
      ],
    },
  },
];
const PERSONAL_DESCRIPTION =
  'I started with HTML and CSS in high school. Then I discovered JS who fascinated me and I realized that I like it. I created personal projects and after a while I discovered Node.js that allowed me to create a full stack application only with JS. I participated in an School of UI in Endava, where I learned React and Redux then I learned to create MERN Stack applications ';
const VOLUNTEERING_EXPERIENCE = [
  {
    left: {
      title: 'Volunteer',
      description: 'October 2017 - June 2019',
    },
    icon: <AccessibilityNewIcon />,
    right: {
      title: 'Volunteer ASII',
      description:
        'Volunteer in the Association of computer science students Iasi',
    },
  },
];

const EDUCATION_EXPERIENCE = [
  {
    left: {
      title: 'High School Degree',
      description: 'September 2013 - June 2017',
    },
    icon: <SchoolIcon />,
    right: {
      title: 'High School',
      description: 'Computer Science High School "Grigore Moisil" Iasi',
    },
  },
  {
    left: {
      title: 'Bachelor Degree',
      description: 'October 2017 - June 2020',
    },
    icon: <SchoolIcon />,
    right: {
      title: 'College',
      description: 'Faculty of Computer Science Iasi',
    },
  },
];
const WORK_EXPERIENCE = [
  {
    left: {
      title: 'Front-end Developer',
      description: 'June 2021 - Present',
    },
    icon: <CodeIcon />,
    right: {
      title: 'Endava',
      description:
        'Part of the front-end development team on a insurance project. Responsible of implementing the required design. Technology Stack: HTML, CSS, JQuery, JSP, SVN',
    },
  },

  {
    left: {
      title: 'Front-end Developer',
      description: 'February 2019 - March 2020',
    },
    icon: <CodeIcon />,
    right: {
      title: 'Endava',
      description:
        'Part of the front-end development team on a insurance project. Responsible of implementing the required design. Technology Stack: HTML, CSS, JQuery, JSP, SVN',
    },
  },
  {
    left: {
      title: 'UI School',
      description: 'November 2018 - December 2018',
    },
    icon: <CodeIcon />,
    right: {
      title: 'Endava',
      description: 'HTML, CSS, JS, ReactJS Internship',
    },
  },
];

const ProfilePage = () => {
  return (
    <>
      <Header
        brand='<About.me/>'
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
                      src={me4}
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
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className='description'>
              <div className='title'>
                <h3>About me</h3>
              </div>
              <p>{PERSONAL_DESCRIPTION}</p>
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
            <div className='tools'>
              <div className='title'>
                <h3>Tools</h3>
              </div>
              <div>
                {TOOLS.map((tool) => (
                  <Badge color='info'>{tool}</Badge>
                ))}
              </div>
            </div>

            <div className='resume'>
              <div className='title'>
                <h3>Resume</h3>
              </div>
              <br />
              <div className='headerTitle'>
                <h3>Work Experience</h3>
              </div>
              <CustomizedTimeline data={WORK_EXPERIENCE} />
              <div className='headerTitle'>
                <h3>Education Experience</h3>
              </div>
              <CustomizedTimeline data={EDUCATION_EXPERIENCE} />
              <div className='headerTitle'>
                <h3>Volunteering Experience</h3>
              </div>
              <CustomizedTimeline data={VOLUNTEERING_EXPERIENCE} />
              <div className='headerTitle'>
                <h3>Certifications</h3>
              </div>
              <CustomizedTimeline data={CERTIFICATIONS} />
            </div>
            <div className='projects'>
              <div className='title'>
                <h3>Projects</h3>
              </div>
              <div>
                <Badge>Comming Soon</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
