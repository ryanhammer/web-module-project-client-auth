import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { TextField, makeStyles, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  formItem: {
    marginBottom: '1.5rem'
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
          <Grid item className={classes.formItem}>
            <TextField
              name="username"
              label="Username"
              type="text"
              value={credentials.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item className={classes.formItem}>
            <TextField
              name="standard-password-input"
              label="Password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
            />
          </Grid>
          <Button 
            className={classes.formItem}
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