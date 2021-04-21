import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Box, Typography, Container, makeStyles } from '@material-ui/core';

export default function Friends() {

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

    <Container maxWidth='md'>
      <Typography align='center' variant='h2' gutterBottom={true} >
        Your Friends are Here For You!
      </Typography>
      { friends.map(item => (
        <Box key={ item.id }>
          <Typography align='center' variant='h3' gutterBottom={true} >
            Friend: { item.name }
          </Typography> 
          <Typography align='center' variant='h5' gutterBottom={true} >
            Age: { item.age }
          </Typography>
          <Typography align='center' variant='h5' gutterBottom={true} >
            Email: { item.email }
          </Typography>
        </Box>
      ))}
    </Container>
  )
}