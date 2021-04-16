import React from 'react';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import Header from './../../shared/Header/Header';
import Parallax from './../../shared/Parallax/Parallax';
import bg4 from '../../assets/img/bg4.jpg';
import GridContainer from './../../shared/Grid/GridContainer';
import GridItem from '../../shared/Grid/GridItem';
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
        <Parallax image={bg4}>
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
          <h1>asd</h1>
        </div>
        <div style={{ minHeight: '3000px' }}>asd</div>
      </div>
    </>
  );
};

export default Components;
