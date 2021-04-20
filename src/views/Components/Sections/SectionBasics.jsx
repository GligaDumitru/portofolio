import InputAdornment from '@material-ui/core/InputAdornment';
import Favorite from '@material-ui/icons/Favorite';
import People from '@material-ui/icons/People';
import React from 'react';

import { default as Button } from './../../../shared/Button/Button';
import GridContainer from './../../../shared/Grid/GridContainer';
import GridItem from './../../../shared/Grid/GridItem';
import Input from './../../../shared/Input/Input';

const SectionBasics = () => {
  return (
    <div className='sections'>
      <div className='container'>
        <div className='title'>
          <h2>Basic Elements</h2>
        </div>
        <div id='buttons'>
          <div className='title'>
            <h3>Buttons</h3>
            <br />
            <small>Pick your style</small>
          </div>
          <GridContainer justify='center'>
            {[
              'primary',
              'info',
              'success',
              'warning',
              'danger',
              'rose',
              'white',
              'facebook',
              'twitter',
              'google',
              'github',
              'transparent',
            ].map((el) => (
              <GridItem xs={12} sm={12} md={8}>
                <Button color={el}>{el}</Button>
                <Button color={el} round>
                  round
                </Button>
                <Button color={el} round>
                  <Favorite className='icons' /> with icon
                </Button>
                <Button justIcon round color={el}>
                  <Favorite className='icons' />
                </Button>
                <Button color={el} simple>
                  simple
                </Button>
              </GridItem>
            ))}
          </GridContainer>
          <div className='title'>
            <h3>
              <small>Pick your size</small>
            </h3>
          </div>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={8}>
              <Button color='primary' size='sm'>
                Small
              </Button>
              <Button color='primary'>Regular</Button>
              <Button color='primary' size='lg'>
                Large
              </Button>
            </GridItem>
          </GridContainer>
          <div className='title'>
            <h3>
              <small>Pick your color</small>
            </h3>
          </div>
          <GridContainer justify='center'>
            <GridItem xs={12} sm={12} md={8}>
              <Button>Default</Button>
              {[
                'primary',
                'info',
                'success',
                'warning',
                'danger',
                'rose',
                'white',
                'facebook',
                'twitter',
                'google',
                'github',
                'transparent',
              ].map((el) => (
                <Button color={el}>{el.toUpperCase()}</Button>
              ))}
            </GridItem>
          </GridContainer>
        </div>
        <div className='inputs'>
          <div className='title'>
            <h3>Inputs</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} md={4} lg={3}>
              <Input
                id='regular'
                inputProps={{
                  placeholder: 'Regular',
                }}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText='With floating label'
                id='float'
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText='Success input'
                id='success'
                success
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText='Error input'
                id='error'
                error
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText='With material Icons'
                id='material'
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <People />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <Input
                labelText='With Font Awesome Icons'
                id='font-awesome'
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <i className='fas fa-users' />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionBasics;
