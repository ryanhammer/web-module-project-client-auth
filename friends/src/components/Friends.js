import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Box, Typography, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  friendBox: {
    marginBottom: '1.5rem'
  }
});

export default function Friends() {

  const classes=useStyles();

  const [ friends, setFriends ] = useState([]);

  const getFriends = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then( (res) => {
        setFriends(res.data);
      })
      .catch( (err) => {
        console.log(err.response.data.error);
      })
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (

    <Container maxWidth='lg'>
      <Typography align='center' variant='h2' gutterBottom={true} >
        Your Friends are Here For You!
      </Typography>
      { friends.map(item => (
        <Box key={ item.id } className={ classes.friendBox }>
          <Typography align='left' variant='h4' gutterBottom={true} >
            Friend: { item.name }
          </Typography> 
          <Typography align='left' variant='h5' gutterBottom={true} >
            Age: { item.age }
          </Typography>
          <Typography align='left' variant='h5' gutterBottom={true} >
            Email: { item.email }
          </Typography>
        </Box>
      ))}
    </Container>
  )
}