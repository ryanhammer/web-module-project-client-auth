import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  linkText: {
    textDecoration: `none`,
    color: 'black'
  }
});

export default function Login() {

  const initialFormValues = {
    credentials: {
      username: '',
      password: ''
    }
  };
  
  const [loginCredentials, setLoginCredentials] = useState(initialFormValues);
  
  const handleChange = e => {
    setLoginCredentials({
      credentials: {
        ...loginCredentials,
        [e.target.name]: e.target.value
      }
    });
  };
  
  const login = e => {
    e.preventDefault();
    // Make a POST request with the username and password as the data body
    axiosWithAuth()
      .post('/api/login', loginCredentials)
      .then( (res) => {
        // res.data.payload
        // store the token in localStorage (sessions, cookies)...add window in front to accommodate some older browsers
        window.localStorage.setItem('token', JSON.stringify(res.data.payload));
        // navigate to some landing/profile/dashboard page
        // useHistory('/friends');
  
      })
  };

  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg'>

      </Container>
    </>
  )
}