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
    name: '',
    age: '',
    email: ''
  };
  
  const [friendInfo, setFriendInfo] = useState(initialFormValues);
  
  const handleChange = e => {
    setFriendInfo({
      ...friendInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const submitNewFriend = e => {
    e.preventDefault();
    // Make a POST request with the new friend information as the data body
    axiosWithAuth()
      .post('/api/friends', friendInfo)
      .then( () => {
        // if new friend is added, redirect to friends dashboard
        history.push('/friends');
      })
      .catch( err => {
        console.log(err);
      })
  };

  return (
    <>
      <form onSubmit={submitNewFriend} >
        <Grid container="true" alignContent="space-evenly" alignItems="center" justify="center" direction="column">
          <Grid item className={classes.formItem}>
            <TextField
              name="name"
              label="New Friend Name"
              type="text"
              value={friendInfo.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item className={classes.formItem}>
            <TextField
              name="age"
              label="New Friend Age"
              type="number"
              value={friendInfo.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item className={classes.formItem}>
            <TextField
              name="email"
              label="New Friend Email"
              type="email"
              value={friendInfo.email}
              onChange={handleChange}
            />
          </Grid>
          <Button 
            className={classes.formItem}
            variant='contained'
            color='primary'
            type='submit'
            >
            Add Friend
          </Button>
        </Grid>
      </form>
    </>
  )
}