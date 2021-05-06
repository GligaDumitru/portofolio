import SendIcon from '@material-ui/icons/Send';
import { Alert } from '@material-ui/lab';
import * as emailjs from 'emailjs-com';
import React, { useState } from 'react';

import { useForm } from './../../../hooks/index';
import { default as Button } from './../../../shared/Button/Button';
import GridContainer from './../../../shared/Grid/GridContainer';
import GridItem from './../../../shared/Grid/GridItem';
import Input from './../../../shared/Input/Input';

const ContactForm = () => {
  const [alertMsg, setAlertMsg] = useState({
    open: false,
    type: 'success',
    message: 'SUCCESS!',
  });
  const initialState = {
    name: '',
    email: '',
    description: '',
  };

  const { onChange, onSubmit, clearValues, values } = useForm(
    initialState,
    callbackParent
  );
  const onSubmitCallback = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        '#myform',
        process.env.REACT_APP_USER_ID
      )
      .then(
        (response) => {
          setAlertMsg({
            ...alertMsg,
            open: true,
            type: 'success',
            message: `[${response.status}] : Thank you for your message!`,
          });
          setTimeout(() => {
            setAlertMsg({
              ...alertMsg,
              open: false,
              type: 'success',
              message: ``,
            });
          }, 3000);
        },
        (err) => {
          setAlertMsg({
            ...alertMsg,
            open: true,
            type: 'error',
            message: `Failed!! (${JSON.stringify(err)})`,
          });
        }
      );
    clearValues();
  };

  function callbackParent() {
    onSubmitCallback();
  }

  return (
    <form onSubmit={onSubmit} id='myform'>
      {alertMsg && alertMsg.open && (
        <Alert severity={alertMsg.type}>{alertMsg.message}</Alert>
      )}

      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={6}>
          <Input
            type='text'
            required
            labelText='Name *'
            name='name'
            autocomplete='name'
            value={values.name}
            id='float'
            onChange={onChange}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Input
            type='text'
            required
            onChange={onChange}
            autocomplete='email'
            name='email'
            value={values.email}
            labelText='Email *'
            id='float'
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12}>
          <Input
            type='text'
            required
            labelText='Description *'
            autocomplete='description'
            id='float'
            onChange={onChange}
            multiline
            name='description'
            value={values.description}
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>

        <GridItem xs={12}>
          <Button color='info' round type='submit'>
            <SendIcon className='icons' />
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};

export default ContactForm;
