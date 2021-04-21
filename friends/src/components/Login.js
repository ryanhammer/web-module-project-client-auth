import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Container, TextField, makeStyles, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  }
});

export default function Login() {

  const history = useHistory();
  const classes = useStyles();

  const initialFormValues = {
    username: '',
    password: ''
  };
  
  const [credentials, setCredentials] = useState(initialFormValues);
  
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  
  const login = e => {
    e.preventDefault();
    // Make a POST request with the username and password as the data body
    axiosWithAuth()
      .post('/api/login', credentials)
      .then( (res) => {
        // res.data.payload
        // store the token in localStorage (sessions, cookies)...add window in front to accommodate some older browsers
        window.localStorage.setItem('token', JSON.stringify(res.data.payload));
        // navigate to some landing/profile/dashboard page
        history.push('/friends');
      })
  };

  return (
    <>
      <form onSubmit={login} >
        <Grid container='true' alignContent="space-evenly" alignItems="center" justify="center" direction="column">
          <Grid item>
            <TextField
              name="username"
              label="Username"
              type="text"
              value={credentials.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              name="standard-password-input"
              label="Password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </Grid>
          <Button 
            variant='contained'
            color='primary'
            type='submit'
            >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  )
}