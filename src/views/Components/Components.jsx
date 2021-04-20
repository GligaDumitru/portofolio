import React from 'react';

import bg7 from '../../assets/img/bg7.jpg';
import GridItem from '../../shared/Grid/GridItem';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import GridContainer from './../../shared/Grid/GridContainer';
import Header from './../../shared/Header/Header';
import Parallax from './../../shared/Parallax/Parallax';
import SectionBasics from './Sections/SectionBasics';

const Components = () => {
  return (
    <>
      <Header
        brand='Components Page'
        fixed
        color='transparent'
        changeColorOnScroll={{ height: '200', color: 'white' }}
        rightLinks={<HeaderLinks />}
      />
      <div className='component-wrapper'>
        <Parallax image={bg7}>
          <div className='container'>
            <GridContainer>
              <GridItem>
                <div className={'brand'}>
                  <h1 className={'title'}>Components Page</h1>
                  <h3 className={'subtitle'}>
                    Material-UI KIT component with React
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className='main main-raised'>
          <SectionBasics />
        </div>
        {/* <ScrollAnimation animateIn='swing'>
          <div className='main main-raised'>
            <div style={{ minHeight: '500px' }}>asd</div>
          </div>
        </ScrollAnimation> */}
      </div>
    </>
  );
};

export default Components;
